class Api::CategoriesController < ApplicationController
  skip_before_action :authorized, only: [:get_cities_in_state]


  def get_cities_in_state
    state = State.find(params: id)
    cities = City.retrieve_cities(state)
  end

end
