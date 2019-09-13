class Api::CategoriesController < ApplicationController


  def get_cities_in_state
    state = State.find(params: id)
    cities = City.retrieve_cities(state)
  end

end
