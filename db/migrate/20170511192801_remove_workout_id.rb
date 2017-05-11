class RemoveWorkoutId < ActiveRecord::Migration[5.0]
  def change
    remove_column :routes, :workout_id
  end
end
