class Api::AdminsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { admin: AdminSerializer.new(current_admin) }, status: :accepted
  end

  def create
    @admin = Admin.create(admin_params)
    if @admin.valid?
      @token = encode_token(admid_id: @admin.id)
      render json: { admin: AdminSerializer.new(@admin), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create admin' }, status: :not_acceptable
    end

  end




  private
  def admin_params
    params.require(:admin).permit(:username, :password)
  end

end
