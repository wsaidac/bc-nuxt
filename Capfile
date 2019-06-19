set :deploy_config_path, 'infra/cap/deploy.rb'
set :stage_config_path, 'infra/cap/stages'

require 'capistrano/setup'
require 'capistrano/deploy'
require 'capistrano/yarn'
require 'capistrano/passenger'
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

Dir.glob('infra/cap/tasks/*.rb').each { |r| import r }
