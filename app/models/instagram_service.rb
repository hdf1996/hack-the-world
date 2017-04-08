# https://api.instagram.com/oauth/authorize/?client_id=732f7a8c593249aba716b16a2c9e7261&redirect_uri=https://hacktheworldapi.herokuapp.com/redirects/instagram&response_type=code
# https://api.instagram.com/oauth/authorize/?client_id=732f7a8c593249aba716b16a2c9e7261&redirect_uri=http://localhost:3000/redirects/instagram&response_type=code&scope=public_content
class InstagramService
  include HTTParty
  attr_accessor :access_token
  CLIENT_ID = "732f7a8c593249aba716b16a2c9e7261"
  CLIENT_SECRET = "ad6a0c9477f24ea1b607cb026d417d97"
  REDIRECT_URL = "http://localhost:3000/redirects/instagram"

  def photos_by_hashtag(hashtag)
    JSON.parse(self.class.get("https://api.instagram.com/v1/tags/#{hashtag}/media/recent", options).body)
  end

  def options opts={}
    { query: {
      access_token: access_token,
      client_id: CLIENT_ID
    }.merge(opts)}
  end

  def access_token
    @access_token = "3974370099.732f7a8.a6a0282cd2a7443781570b951fcb834c"
  end

  def generate_access_token code
    HTTParty.post("https://api.instagram.com/oauth/access_token", { body: {
      client_secret: CLIENT_SECRET,
      client_id: CLIENT_ID,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URL,
      code: code,
      scope: "public_content"
    }})["access_token"]
  end
end