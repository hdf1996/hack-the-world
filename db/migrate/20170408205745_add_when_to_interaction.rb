class AddWhenToInteraction < ActiveRecord::Migration[5.0]
  def change
    add_column :interactions, :when, :datetime
  end
end
