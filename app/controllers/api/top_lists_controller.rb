class Api::TopListsController < ApplicationController
  skip_before_action :authorized, only: [:index, :create, :show]


  def index
    lists = TopList.all
    render json: lists
  end

  def create

    list = TopList.create(list_params)
    render json: list

  end

  def show
    list = TopList.find_by(id: param[:id])
    render json: list
  end

  private

  def list_params
    params.require(:top_list).permit(:title, :area, :year, posts_attributes: [:title])
  end


end
