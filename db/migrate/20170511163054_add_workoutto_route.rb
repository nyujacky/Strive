class AddWorkouttoRoute < ActiveRecord::Migration[5.0]
  def change
    add_column :routes, :workout_id, :integer
  end
end
