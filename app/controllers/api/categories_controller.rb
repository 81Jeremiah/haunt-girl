class Api::CategoriesController < ApplicationController


  def show
    category_id = Category.find_category_id(params[:id])

    # category = Category.find_by(id: category_id)

    @posts = Post.by_category(category_id)
    render json: @posts
  end

end
