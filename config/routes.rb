Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:create, :destroy, :index, :show, :update]
  end
end
