json.array! @routes do |route|
  json.id route.id
  json.user_id route.user_id
  json.sport route.sport
  json.title route.title
  json.date route.date
  json.distance route.distance
  json.duration route.duration
  json.elevation route.elevation
  json.routepolystring route.routepolystring
  json.description route.description
end
