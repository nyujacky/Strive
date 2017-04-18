class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params);

    if @user.save
      login(@user)
      render :show
    else
      render json :@user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all.limit(20)
    render :index
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :bio, :location, :avatar)
  end
end
