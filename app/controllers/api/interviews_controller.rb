class Api::InterviewsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :new, :create, :edit, :update, :destroy, :recent_posts, :search, :escape_room_search]
  before_action :set_interview, only: [:update, :show, :edit, :destroy]


  def index
    interviews = Interview.all
    render json: interviews
  end

  def create

    interview = Interview.create(interview_params)
    render json: interview

  end

  def show
    interview = Interview.find_by(id: params[:id])
    render json: interview
  end

  def new

  end

  def update

    @interview.update(interview_params)
    render json: @interview

  end

  def edit
    render json: @interview
  end

  def destroy
    @interview.destroy
  end

  private

  def set_interview
    @interview = Interview.find_by(id: params[:id])
  end


  def interview_params
    params.require(:interview).permit(:title, :content, :website)
  end

end
