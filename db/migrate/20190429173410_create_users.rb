class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :team_id, null: false
      t.string :username, null: false, unique: true
      t.integer :points_to_give, null: false
      t.integer :points_to_redeem, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :users, :username

  end
end
