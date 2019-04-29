class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
    	t.references :team
      t.string :username
      t.integer :points
      t.string :name

      t.timestamps
    end
  end
end
