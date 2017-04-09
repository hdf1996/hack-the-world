class TwitterWorker
  include Sidekiq::Worker

  def perform(*args)
    Hashtag.find_each do |hashtag|
      TwitterService.new.client.search("##{hashtag.name}", result_type: "recent").to_a.map do |twitt|
        params = {
          amount: twitt.favorite_count,
          uid: twitt.id,
          name: twitt.user.name,
          profile_picture: twitt.user.profile_image_uri_https.to_s,
          nick: twitt.user.screen_name,
          original_link: twitt.uri.to_s,
          type_interaction: :creation,
          type_content: tweet_type(twitt),
          text: twitt.full_text,
          image_url: twitt_media(twitt),
          hashtag: hashtag,
          social_network: :twitter,
        }
        old_interaction = Interaction.find_or_initialize_by(uid: twitt.id).tap(&:save)
        logger.debug "#{old_interaction.errors.inspect}"
        new_interaction = old_interaction.update(params)
        logger.debug "#{new_interaction.inspect}"
      end
    end
  end

  private
  def twitt_media twitt
    twitt.media.first.media_uri_https.to_s if tweet_type(twitt) == :image
  end

  def tweet_type twitt
    twitt.media.empty? ? :text : :image
  end
end
