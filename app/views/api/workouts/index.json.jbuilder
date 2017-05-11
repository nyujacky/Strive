json.array! @workouts do |workout|
  json.id workout.id
  # json.user_id = workout.user_id
  json.route_id = workout.route_id
  json.route_title workout.route.title
end
