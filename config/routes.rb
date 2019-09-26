Rails.application.routes.draw do

  namespace :api do

   get '/states/with_posts', to: 'states#states_with_posts'
   get  'posts/search' => 'posts#search'
   resources :admins, only: [:create]
   post '/login', to: 'auth#create'
   get '/profile', to: 'admins#profile'
   resources :posts
   get 'posts/:id/edit' => 'posts#edit'
   resources :categories, only: [:show]
   resources :states, only: [:index, :show]

 end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
