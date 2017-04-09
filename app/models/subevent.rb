class Subevent < ApplicationRecord
  belongs_to :hashtag

  def as_json obj= {}
    {
      id: id,
      type_interaction: Interaction.type_interactions.keys[type_interaction],
      type_content: Interaction.type_contents.keys[type_content],
      text: text,
      image_url: image_url,
      original_link: original_link,
      name: name,
      profile_picture: profile_picture,
      nick: nick,
      uid: uid,
      likes: amount,
      hashtag: hashtag.try(:name),
      social_network: social_network,
      created_at: created_at.to_i
    }
  end
end
