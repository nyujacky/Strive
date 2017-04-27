Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :index, :update, :show] do
      resources :routes
      resources :workouts
    end



    # resources :workouts, only [:create, :destroy, :index, :show, :update]

  end
end
