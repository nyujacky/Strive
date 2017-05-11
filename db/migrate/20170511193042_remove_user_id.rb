class RemoveUserId < ActiveRecord::Migration[5.0]
  def change
    remove_column :workouts, :user_id
  end
end
