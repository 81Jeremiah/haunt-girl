class Api::CategoriesController < ApplicationController
  skip_before_action :authorized, only: [:show]


  def show
    category_id = Category.find_category_id(params[:id])

    # category = Category.find_by(id: category_id)

    @posts = Post.by_category(category_id)
    render json: @posts.with_attached_image
  end

end
