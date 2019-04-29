class AddMessageToBlames < ActiveRecord::Migration[5.2]
  def change
  	add_column :blames, :message, :string
  end
end
