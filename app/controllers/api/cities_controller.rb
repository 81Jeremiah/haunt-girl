class Api::CitiesController < ApplicationController
  skip_before_action :authorized, only: [:cities_in_state]

  def cities_in_state
    state = State.find_by(abbreviation: params[:id][1..-1] )


    @cities = state.cities

    render json: @cities
  end

end
