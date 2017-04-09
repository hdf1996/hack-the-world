class AddSocialNetworkToInteraction < ActiveRecord::Migration[5.0]
  def change
    add_column :interactions, :social_network, :string
  end
end
