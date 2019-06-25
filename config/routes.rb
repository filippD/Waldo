Rails.application.routes.draw do
  get 'waldo/index'
  get 'waldo/check'
  root to: 'waldo#index' 
end
