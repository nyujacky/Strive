# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
avatar          | attachment|
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location        | string    |
bio             | text      |

## routes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (users), indexed
sport           | string   | not null, indexed
title           | string    | not null
date            | date      | not null
distance        | float     |
duration        | float     |
elevation        | integer   |

## workouts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (users), indexed
title           | string    | not null
sport           | string    | not null
description     | text      |
date            | date      | not null
distance        | float     |
duration        | float     |
elevation        | integer   |
