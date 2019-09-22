
class Api::PostsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  before_action :set_post, only: [:update, :show, :edit, :destroy]



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


    post= Post.new(post_params)
    post.city.state_id = params[:post][:state]
    post.save
    # post.published_at = post.created_at.strftime("%B %-d %Y")
    render json: post
  end

  def escape_rooms
    # @escape_rooms = Post.find_by(category:)
  end

  def new

  end

  def update
    @post.update(post_params)
    flash[:message]="Post updated!"
    render json: @post

  end

  def edit
    render json: @post
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find_by(id: params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :category_id, :content, :image,
      :video, :city_name, :published_at, :company_website, :recommended_players,
      :public_or_private, :recommended_age, :scarefactor, :price, :difficulty)
  end


end
