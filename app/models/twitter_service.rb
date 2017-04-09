class TwitterService

  def client
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "7ohVQfuD61fP7EY12pJHyYFZP"
      config.consumer_secret     = "ATBKRE6a7MJAdeKhg0HtbQk2bsvN39U0gg5zWWKUNLXWEbW662"
      config.access_token        = "99172452-Yb0yjDsd8ETRqzcfCPQTKZx5xaX2UXLEpJQOqllyF"
      config.access_token_secret = "5keYvzoKlOXz0EzFHlIYuCcqWRnrUZsDb3Js4bT5c31G2"
    end
  end
end