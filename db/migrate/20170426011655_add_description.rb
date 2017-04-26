class AddDescription < ActiveRecord::Migration[5.0]
  def change
    add_column :routes, :description, :text
  end
end
