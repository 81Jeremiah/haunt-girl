class Api::StatesController < ApplicationController
  skip_before_action :authorized, only: [:index, :states_with_posts, :show]

  def index
     states = State.all
     render json: states
  end

  def states_with_posts

     category_id = Category.find_category_id(params[:id][1..-1])

     @states = Post.unique_states(category_id)
    # states = State.has_posts
    debugger
    render json: @states
  end

  def show
    state = State.find_by(abbreviation: params[:id] )
    state_id = state.id

    # category = Category.find_by(id: category_id)

    posts = Post.by_state(state_id)
    render json: posts.with_attached_image
  end

end
