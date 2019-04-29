class CreateBlames < ActiveRecord::Migration[5.2]
  def change
    create_table :blames do |t|
    	t.references :team
			t.references :user
	    t.string :recepient
	    t.integer :points

	    t.timestamps
    end
  end
end
