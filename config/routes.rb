Rails.application.routes.draw do

  namespace :api do

   get '/states/with_posts', to: 'states#states_with_posts'
   get 'cities/cities_in_state', to: 'cities#cities_in_state'
   get 'posts/search', to: 'posts#search'
   get 'posts/escape_room_search', to: 'posts#escape_room_search'
   get 'posts/recentposts', to: 'posts#recent_posts'
   resources :admins, only: [:create]
   post '/login', to: 'auth#create'
   get '/profile', to: 'admins#profile'
   resources :posts
   get 'posts/:id/edit' => 'posts#edit'
   resources :categories, only: [:show]
   resources :states, only: [:index, :show]
   resources :awards
   resources :interviews
   resources :announcements
   resources :top_lists
 end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
