## Component Hierarchy

**App**
- Navbar
  + Sign up with FB/Google button
  + Log In button

**AuthFormContainer**
 - AuthForm

**DashboardContainer**
 - Home
 - Aside/Sidebar

**RouteIndexContainer**
 - RoutesHeader
  * RouteIndex

**WorkoutContainer**
 - WorkoutHeader
  + WorkoutIndex

**ExploreContainer**
 - Search

**RouteIndex**
 - RouteIndexItem

**WorkoutIndex**
 - WorkoutIndexItem

**RouteIndexItem**
 - RouteDetail

**NewRouteContainer**
 - NewRoute
  + NewRouteButton

**NewWorkoutContainer**
 - NewWorkout
  + NewWorkoutButton

**Workout**
 - WorkoutDetail

**NewRoute**
 - NewRoute

**NewWorkout**
 - NewWorkout

**Explore**
 - Activity
 - User

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "DashboardContainer" |
| "/home/routes/" | "RouteIndexContainer" |
| "/home/routes/:routeId" | "RouteContainer" |
| "/workouts/:workoutId" | "WorkoutContainer" |
| "/explore/" | "ExploreContainer" |
| "/new-route" | "NewRoute" |
| "/new-workout" | "NewWorkout" |
