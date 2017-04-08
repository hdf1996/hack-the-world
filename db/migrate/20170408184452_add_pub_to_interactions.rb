class AddPubToInteractions < ActiveRecord::Migration[5.0]
  def change
    add_reference :interactions, :hashtag, foreign_key: true
  end
end
