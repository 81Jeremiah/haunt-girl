class Api::AwardsController < ApplicationController

  def create

    award= Award.new(award_params)

  end


  private

  def award_params
    params.require(:award).permit(:title, :year, :link)
  end
end
