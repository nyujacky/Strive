class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render :index
  end

  def create
    @workout = Workout.new(workout_params);
    if @workout.save
      render :index
    end
  end
  def show
    @workout = Workout.find(params[:id])
    render :show
  end

  def update
    @workout = Workout.find(params[:id])
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
