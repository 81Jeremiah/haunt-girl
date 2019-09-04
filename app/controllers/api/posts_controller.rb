
class Api::PostsController < ApplicationController
  before_action :set_post, only: [:update, :show]

  def index
    category_id = Category.find_category_id(params[:id])

    # category = Category.find_by(id: category_id)

    @posts = Post.by_category(category_id)
    render json: @posts
  end

  def show
    @post = Post.with_attached_image.find_by(id: params[:id])
    render json: @post
  end

  def create
    debugger
    @post= Post.create!(post_params)
    @post.published_at = @post.created_at.strftime("%m-%d-%Y")
    @post.city_id = City.check_for_city(params[:post][:city])
    @post.save
    render json: @post
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
    params.require(:post).permit(:title, :category_id, :content, :image, :state_id, :city_id, :video, :city)
  end



end
