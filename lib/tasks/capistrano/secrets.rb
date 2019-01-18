# frozen_string_literal: true

namespace :params do
  desc 'pulls secrets from AWS Parameter Store'
  task :pull do
    on roles :web do
      within release_path do
        execute './ssm2env', 'pull'
        execute :chmod, '0640', '.env'
      end
    end
  end
end
