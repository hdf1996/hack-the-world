class Api::V1::CountersController < ApplicationController
  def show 
    render json: {
      total: 0.5,
      images: [{
        type: :share,
        social_network: [:facebook, :instagram, :twitter].sample,
        url: Faker::Avatar.image,
      }]
    }
  end
end
