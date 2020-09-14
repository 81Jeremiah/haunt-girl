class Api::TopListsController < ApplicationController
  skip_before_action :authorized, only: [:index, :create, :show]
  before_action :set_list

  def index
    lists = TopList.all
    render json: lists
  end

  def create

    list = TopList.create(list_params)
    render json: list

  end

  def show
    list = TopList.find_by(id: params[:id])
    render json: list
  end

  def new

  end

  def update

    @list.update(list_params)
    render json: @list

  end

  def edit
    render json: @list
  end

  def destroy
    @list.destroy
  end

  private

  def set_list
    @list = TopList.find_by(id: params[:id])
  end

  def list_params
    params.require(:top_list).permit(:title, :area, :year, posts_attributes: [:title])
  end


end
