class Api::StatesController < ApplicationController
  skip_before_action :authorized, only: [:index, :states_with_posts, :show]

  def index
     states = State.all
     render json: states
  end

  def states_with_posts
    states = State.has_posts
    render json: states
  end

  def show
    state = State.find_by(abbreviation: params[:id] )
    state_id = state.id

    # category = Category.find_by(id: category_id)

    posts = Post.by_state(state_id)
    render json: posts.with_attached_image
  end

end
