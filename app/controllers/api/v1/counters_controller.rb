class Api::V1::CountersController < ApplicationController
  def show 
    @interactions = Pub.find_by(slug: params[:id]).hashtag.interactions.order(:id).last(10)
    @interactions = Pub.find_by(slug: params[:id]).hashtag.interactions.where('id > ?', params[:last_id]).order(:id) if params[:last_id].present?
    render json: {
      total: Pub.find_by(slug: params[:id]).hashtag.goal_completed,
      interactions: @interactions
    }
  end
end
