class Api::AwardsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :update]
  before_action :set_award, only: [:update, :show, :edit, :destroy]

  def index
    awards = Award.all
    render json: awards
  end

  def create

    award = Award.create(award_params)
    render json: award

  end

  def show
    render json: @award
  end

  def new

  end

  def update
    @award.update(award_params)
    render json: @award
  end

  def edit
    render json: @award
  end

  def destroy
    @award.destroy
  end

  private

  def set_award
    @award = Award.find_by(id: params[:id])
  end

  def award_params
    params.require(:award).permit(:title, :year, :link_to_post, :content)
  end
end
