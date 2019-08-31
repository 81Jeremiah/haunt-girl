class Api::StatesController < ApplicationController

  def index
     states = State.all
     render json: states
  end

end
