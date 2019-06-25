Rails.application.routes.draw do
  get 'scores/index'
  get 'waldo/index'
  get 'waldo/is_waldo'
  get 'home/index'
  root to: 'home#index' 
end
