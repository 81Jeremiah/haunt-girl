class Api::AwardsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create

    award= Award.create(award_params)
    render json: award

  end


  private

  def award_params
    params.require(:award).permit(:title, :year, :link, :content)
  end
end
