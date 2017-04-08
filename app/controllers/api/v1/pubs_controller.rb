class Api::V1::PubsController < ApplicationController
  def index
    render json: Pub.all
  end
end
