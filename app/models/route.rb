class Route < ApplicationRecord

belongs_to :user
has_one :workout
end
