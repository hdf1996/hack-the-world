class Api::V1::PubsController < ApplicationController
  def index
    @response = Pub.all
    @response = @response.sort(&:goal_completed)
    render json: @response
  end
end
