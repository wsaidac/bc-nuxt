# frozen_string_literal: true

server 'rapido-frontend-1.eu-west-1.acceptance.cgaws.cloud', user: 'cgdeployer', roles: %w[app web db]
set :branch,                ENV['BRANCH'] || 'release'
