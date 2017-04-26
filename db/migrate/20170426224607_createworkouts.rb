class Createworkouts < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|
      t.integer :user_id
      t.integer :route_id
      t.timestamps
    end
  end
end
