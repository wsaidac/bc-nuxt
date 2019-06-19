# frozen_string_literal: true

namespace :yarn do
  desc 'Build webpack assets with Nuxt'
  task :build do
    on roles(:all) do
      within release_path do
        execute :yarn, 'build'
      end
    end
  end

  after 'yarn:install', 'yarn:build'
end
