class Api::AwardsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    awards = Award.all
    render json: awards
  end

  def create

    award = Award.create(award_params)
    render json: award

  end

  def show
    award = Award.find_by(id: param[:id])
    render json: award
  end

  private

  def award_params
    params.require(:award).permit(:title, :year, :link_to_post, :content)
  end
end
