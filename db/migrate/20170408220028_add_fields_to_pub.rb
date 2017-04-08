class AddFieldsToPub < ActiveRecord::Migration[5.0]
  def change
    add_column :pubs, :direction, :string
    add_column :pubs, :telephone, :string
    add_column :pubs, :latitude, :string
    add_column :pubs, :longitude, :string
  end
end
