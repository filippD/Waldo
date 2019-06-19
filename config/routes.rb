Rails.application.routes.draw do
  get 'waldo/index'
  root to: 'waldo#index' 
end
