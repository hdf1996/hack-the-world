class Api::V1::PubsController < ApplicationController
  def index
    @response = Pub.all
    @response = @response.sort(&:goal_completed) if params[:order_by_goal].present?
    render json: @response
  end
end
