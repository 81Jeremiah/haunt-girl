class Api::PostsController < ApplicationController
  before_action :set_post, only: [:update, :show]

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    render json: @post
  end

  def create
    @post= Post.create!(post_params)

  end

  def escape_rooms
    # @escape_rooms = Post.find_by(category:)
  end
  
  def new

  end

  def update

  end

  private

  def set_post
    @post = Post.find_by(id: params[:id])
  end

  def post_params
    params.require(:post).premit(:title, :category, :content)
  end


end
