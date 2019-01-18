require 'capistrano/setup'
require 'capistrano/deploy'
require 'capistrano/yarn'
require 'capistrano/passenger'
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

Dir.glob('lib/tasks/capistrano/*.rb').each { |r| import r }
