require 'sidekiq-scheduler'

class InstagramWorker
  include Sidekiq::Worker

  def perform(*args)
    Rails.logger.info "Test"
  end
end
