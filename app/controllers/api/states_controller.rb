class Api::StatesController < ApplicationController

  def index
     states = State.all
     render json: states
  end

  def states_with_posts
    states = State.has_posts
    render json: states

  end

end
