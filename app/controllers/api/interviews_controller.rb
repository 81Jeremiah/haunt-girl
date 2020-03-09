class Api::AwardsController < ApplicationController


  def index
    interviews = Interview.all
    render json: interviews
  end

  def create

    interview= Interview.create(award_params)
    render json: award

  end

  def show
    interview = Interview.find_by(id: param[:id])
    render json: interview
  end

  private

  def award_params
    params.require(:interview).permit(:title, :content, :website)
  end

end
