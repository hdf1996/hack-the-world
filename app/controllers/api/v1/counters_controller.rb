class Api::V1::CountersController < ApplicationController
  def show 
    render json: {
      total: 0.5,
      images: [{
        type: :share,
        social_network: [:facebook, :instagram, :twitter].sample,
        url: [
           "https://pbs.twimg.com/media/C8Bj3uZXUAAJIJy.jpg:large",
           "https://pbs.twimg.com/media/C7JacAuWkAQLDCh.jpg:large",
           "https://pbs.twimg.com/media/Cw6FR8dXgAAeFWf.jpg:large"
         ].sample,
      }]
    }
    # render json: {
    #   total: 0.5,
    #   images: [{
    #     type: :share,
    #     social_network: [:facebook, :instagram, :twitter].sample,
    #     url: InstagramService.new.photos_by_hashtag(Hashtag.first.name),
    #   }]
    # }
  end
end
