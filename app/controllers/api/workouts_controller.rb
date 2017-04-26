class Api::WorkoutsController < ApplicationController
  def index
    @workouts = workout.all
    render :index
  end

  def create
    @workout = workout.new(workout_params);
    if @workout.save
      render :index
    end
  end
  def show
    @workout = workout.find(params[:id])
    render :show
  end

  def update
    @workout = workout.find(params[:id])
    if @workout.update(workout_params)
      render :show
    end
  end


  def destroy
    @workout = current_user.workouts.find(params[:id])
    @workout.destroy
    render :index
  end


  private
  def workout_params
    params.require(:workout).permit(:user_id, :route_id)
  end

end
