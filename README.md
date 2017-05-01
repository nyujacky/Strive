#Strive

[Strive live](https//striver.herokuapp.com/)

Strive is a full-stack web application inspired by Strava. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### User Authentication

Users have authentication to go through before being registered, and this is done through the rails backend where a user need only provide an email and password, where upon storage the password is encrypted and made into a hash named the password_digest so that no sensitive information can be extracted easily.

### Routes

Routes are stored in the database with the fields user_id, sport, title, date, distance, duration, duration, elevation, routepolystring, and description, as those are the fields to identify each individual route. This data is all stored in the routes table in the database, and rendered during an index call of all routes for a user, or when adding it to a workout. This is done through AJAX API calls. From there the rendering is through the workout form component as well as the route index component.

### Workouts

Workouts are stored in the database with a route_id, user_id, description, and title. They reference specific routes and belong to a user. When being created, the user has the option of creating a new route or using an old one. The rendering is done through the workout component.

## Future Directions

### Search

### Activity Feed

### Landing Page
