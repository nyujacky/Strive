class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.integer :user_id
      t.string :sport
      t.string :title
      t.date :date
      t.float :distance
      t.float :duration
      t.integer :elevation
      t.string :route
    end
  end
end
