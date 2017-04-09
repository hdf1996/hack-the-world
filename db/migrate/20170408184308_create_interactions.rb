class CreateInteractions < ActiveRecord::Migration[5.0]
  def change
    create_table :interactions do |t|
      t.integer :amount
      t.string :type_content, default: 0
      t.string :type_interaction, default: 0

      t.string :text
      t.string :image_url
      t.string :original_link

      t.string :name
      t.string :profile_picture
      t.string :nick
      t.string :uid, default: ""

      t.timestamps
    end
  end
end
# tipo de contenido img | texto
# tipo de interaccion crear | like | compartir | comentar
