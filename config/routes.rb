Rails.application.routes.draw do

  namespace :api do

   resources :admin, :posts
   resources :categories, only: [:show]
   resources :states, only: [:index]
   get '/states/with_posts', to: 'states#states_with_posts'
 end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
