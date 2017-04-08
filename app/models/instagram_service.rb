class InstagramService
  attr_accessor :access_token
  CLIENT_ID = "732f7a8c593249aba716b16a2c9e7261"
  CLIENT_SECRET = "ad6a0c9477f24ea1b607cb026d417d97"

  def photos_by_hashtag(hashtag)
    access_token
  end

  def access_token
    @access_token ||= 
  end
end