class RedirectsController < ApplicationController
  def instagram
    Rails.logger.info "#{params.inspect}"
  end
end
