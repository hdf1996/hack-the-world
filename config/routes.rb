Rails.application.routes.draw do
  resources :redirects, only: [] do
    collection do
      get :instagram
    end
  end

  namespace :api do
    namespace :v1 do
      resources :counters, only: [:show]
      resources :pubs, only: [:index]
    end
  end
end
