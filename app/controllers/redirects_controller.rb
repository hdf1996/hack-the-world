class RedirectsController < ApplicationController
  def instagram
    Rails.logger.info "#{params.inspect}"
    
    render json:{ access_token: InstagramService.new.generate_access_token(params[:code])}
  end
end
