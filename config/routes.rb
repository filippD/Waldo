Rails.application.routes.draw do
  resources :scores, only: [:create, :index]
  get 'waldo/index'
  get 'waldo/is_waldo'
  get 'home/index'
  root to: 'home#index' 
end
