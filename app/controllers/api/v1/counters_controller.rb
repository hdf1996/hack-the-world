class Api::V1::CountersController < ApplicationController
  def show 
    @interactions = Interaction.last(10)
    @interactions = Interaction.where('created_at >= ?', Time.at(params[:lastpoll].to_i).to_datetime) if params[:lastpoll].present?
    render json: {
      total: 0.5,
      images: @interactions
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
