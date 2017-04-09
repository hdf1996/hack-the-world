require 'sidekiq-scheduler'

class InstagramWorker
  include Sidekiq::Worker

  def perform(*args)
    Hashtag.find_each do |hashtag|
      service = InstagramService.new
      response = service.photos_by_hashtag(hashtag.name)

      response["data"].each do |pic|
        Rails.logger.info pic["likes"]["count"].inspect
        params = {
          amount: pic["likes"]["count"],
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
        if Interaction.where(uid: pic["id"]).any?
          s = Subevent.new(params)
          if Interaction.find_by(uid: pic["id"]).amount != s.amount
            Subevent.create(params.merge(
              amount: s.amount - Interaction.find_by(uid: pic["id"]).amount,
              type_interaction: 1
            ))
          end
          Interaction.find_by(uid: pic["id"]).update(params)
        else
          Interaction.create(params)
          Subevent.create(params)
        end
      end
    end
  end
end
