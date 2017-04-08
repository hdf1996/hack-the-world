Rails.application.routes.draw do
  resources :redirects, only: [] do
    get :instagram
  end
  
  namespace :api do
    namespace :v1 do
      resources :counters, only: [:show]
    end
  end
end
