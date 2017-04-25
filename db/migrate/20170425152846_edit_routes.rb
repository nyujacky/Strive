class EditRoutes < ActiveRecord::Migration[5.0]
  def change
    remove_column :routes, :route
    add_column :routes, :routepolystring, :string
  end
end
