class Api::AnnouncementsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :create]


  def index
    announcements = Announcement.all
    render json: announcements
  end

  def create

    announcement = Announcement.create(announcement_params)
    render json: announcement

  end

  def show
    announcement = Announcement.find_by(id: param[:id])
    render json: announcement
  end

  private

  def announcement_params
    params.require(:announcement).permit(:title, :content)
  end
end
