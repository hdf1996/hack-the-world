class AddFieldsToPubs < ActiveRecord::Migration[5.0]
  def change
    add_column :pubs, :slug, :string
    add_column :pubs, :picture, :string
  end
end
