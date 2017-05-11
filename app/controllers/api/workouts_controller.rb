class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render :index
  end

  def create
    # @workout = current_user.workouts.new(workout_params);
    @route = current_user.routes.find(params[:workout][:route_id])
    @workout = Workout.new(workout_params);
    @workout.route = @route;
    if @workout.save
      render :index
    end
  end
  def show
    @workout = Workout.find(params[:id])
    render :show
  end

  def update
    @workout = current_user.workouts.find(params[:id])
    if @workout.update(workout_params)
      render :show
    end
  end


  def destroy
    @workout = current_user.workouts.find(params[:id])
    @workout.destroy
    render :index
  end

  def selfworkouts
    @workouts = current_user.workouts
    render :index
  end

  private
  def workout_params
    params.require(:workout).permit( :title, :description)
  end

end
