class EditWorkouts < ActiveRecord::Migration[5.0]
  def change
    add_column :workouts, :title, :string
    add_column :workouts, :description, :text
  end
end
