class Api::AnnouncementsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :create]
  before_action :set_announcement, only: [:update, :show, :edit, :destroy]


  def index
    announcements = Announcement.all
    render json: announcements
  end

  def create

    announcement = Announcement.create(announcement_params)
    render json: announcement

  end

  def show

    announcement = Announcement.find_by(id: params[:id])
    render json: announcement
  end

  def new

  end

  def update

    @announcement.update(announcement_params)
    render json: @announcement

  end

  def edit
    render json: @announcement
  end

  def destroy
    @announcement.destroy
  end

  private

  def set_announcement
    @announcement= Announcement.find_by(id: params[:id])
  end

  def announcement_params
    params.require(:announcement).permit(:title, :content)
  end
end
