require 'sidekiq-scheduler'

class InstagramWorker
  include Sidekiq::Worker

  def perform(*args)
    Rails.logger.info "Requesting pics for #{Hashtag.count}hashtags"
    Hashtag.find_each do |hashtag|
      Rails.logger.info "Requestic pics for #{hashtag.id}"
      service = InstagramService.new
      Rails.logger.info service.photos_by_hashtag(hashtag.name).inspect
    end
  end
end
