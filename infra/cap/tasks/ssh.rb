# frozen_string_literal: true

namespace :ssh do
  desc 'Enable local SSH agent forwarding in Capistrano'
  task :enable_agent_forwarding do
    set :ssh_options, forward_agent: true

    on roles :web do
      info 'Testing SSH agent forwarding'
      execute :ssh, '-T', 'git@github.com', raise_on_non_zero_exit: false
    end
  end

  desc 'Start local SSH agent if not running (Docker)'
  task :maybe_start_agent do
    unless ENV['SSH_AUTH_SOCK']
      run_locally do
        info 'Starting SSH agent'
        vars = capture('ssh-agent').match(/SSH_AUTH_SOCK=(?<sock>.+?);.+?SSH_AGENT_PID=(?<pid>\d+?);/m)
        ENV['SSH_AUTH_SOCK'] = vars[:sock]
        ENV['SSH_AGENT_PID'] = vars[:pid]
        info "Agent started at #{ENV['SSH_AUTH_SOCK']} with pid #{ENV['SSH_AGENT_PID']}"
      end

      run_locally do
        info 'Adding default key to agent'
        execute 'ssh-add ~/.ssh/id_rsa'
      end
    end
  end
end
