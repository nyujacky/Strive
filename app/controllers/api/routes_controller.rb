class Api::RoutesController < ApplicationController
  def index
    @routes = Route.all
    render :index
  end

  def create
    @route = current_user.routes.new(route_params);
    if @route.save
      render :index
    end
  end
  def show
    @route = Route.find(params[:id])
    render :show
  end

  def update
    @route = current_user.routes.find(params[:id])
    if @route.update(route_params)
      render :show
    end
  end


  def destroy
    @route = current_user.routes.find(params[:id])
    if @route.destroy
      render :index
    end
  end

  def selfroutes
    @routes = current_user.routes
    render :index

  end

  private
  def route_params
    params.require(:route).permit(:user_id, :sport, :title, :date, :distance, :duration, :duration, :elevation, :routepolystring, :description)
  end

end
