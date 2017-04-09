class Api::V1::CountersController < ApplicationController
  def show 
    @interactions = Interaction.order(:id).last(10)
    @interactions = Interaction.where('id > ?', params[:last_id]).order(:id) if params[:last_id].present?
    render json: {
      total: Pub.find_by(slug: params[:id]).hashtag.goal_completed,
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
