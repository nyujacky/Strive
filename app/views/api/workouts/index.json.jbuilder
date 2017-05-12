json.array! @workouts do |workout|
  json.id workout.id
  json.title workout.title
  json.description workout.description
  json.created workout.created_at
  # json.user_id = workout.user_id


  # json.route_id = workout.route_id
  # json.route_title workout.route.title
  json.route workout.route, :id, :title, :sport, :date, :distance, :duration, :elevation, :routepolystring, :description
end
