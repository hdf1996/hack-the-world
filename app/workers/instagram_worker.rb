require 'sidekiq-scheduler'

class InstagramWorker
  include Sidekiq::Worker

  def perform(*args)
    Hashtag.find_each do |hashtag|
      service = InstagramService.new
      response = service.photos_by_hashtag(hashtag.name)
      # Rails.logger.info response.inspect

      response["data"].each do |pic|
        params = {
          uid: pic["id"],
          name:  pic["user"]["full_name"],
          profile_picture:  pic["user"]["profile_picture"],
          nick: pic["user"]["username"],
          original_link: pic["link"],
          type_interaction: :creation,
          type_content: :image,
          text: pic["caption"]["text"],
          image_url: pic["images"]["standard_resolution"]["url"],
          hashtag: hashtag,
          social_network: :instagram
        }
        old_interaction = Interaction.find_or_initialize_by(uid: pic["id"]).tap(&:save)
        logger.debug "#{old_interaction.inspect}"
        new_interaction = old_interaction.update(params)
        logger.debug "#{new_interaction.inspect}"
      end
    end
  end
end
