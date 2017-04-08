class AddGoalToHashtag < ActiveRecord::Migration[5.0]
  def change
    add_column :hashtags, :goal, :integer, default: 100
  end
end
