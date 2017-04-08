class CreateHashtags < ActiveRecord::Migration[5.0]
  def change
    create_table :hashtags do |t|
      t.string :name
      t.references :pub, foreign_key: true

      t.timestamps
    end
  end
end
