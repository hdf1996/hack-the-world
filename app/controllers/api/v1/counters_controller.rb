class Api::V1::CountersController < ApplicationController
  def show 
    render json: {
      total: 0.5,
      images: [{
        type: :share,
        url: "https://i.ytimg.com/vi/UMkV8CJPTMU/maxresdefault.jpg",
      }]
    }
  end
end
