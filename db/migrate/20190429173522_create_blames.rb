class CreateBlames < ActiveRecord::Migration[5.2]
  def change
    create_table :blames do |t|
	    
	    t.integer :user_id, null: false
	    t.integer :recipient_id, null: false
	    t.integer :points, null: false
	    t.string :message	

	    t.timestamps
    end
  end
end
