# frozen_string_literal: true

set :application,           'rapido_web'
set :repo_url,              "git@github.com:/cgservices/#{fetch(:application)}.git"
set :branch,                ENV['BRANCH'] || 'master'
set :yarn_flags,            '--silent --no-progress --no-optional'

set :deploy_to,             "/data/www/#{fetch(:application)}"

before 'yarn:install', 'params:pull'

after 'yarn:install', 'yarn:build'

before 'deploy:starting', 'ssh:maybe_start_agent'
after 'ssh:maybe_start_agent', 'ssh:enable_agent_forwarding'

if ENV['BASTION_USER']
  require 'net/ssh/proxy/command'
  set :ssh_options, proxy: Net::SSH::Proxy::Command.new("ssh #{ENV['BASTION_USER']}@bastion.cgaws.cloud -W %h:%p")
end
