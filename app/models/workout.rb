class Workout < ApplicationRecord

# belongs_to :user
belongs_to :route, optional: true
end
