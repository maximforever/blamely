class User < ApplicationRecord
	has_many :blames, foreign_key: :user_id

	# look for the thing where the user is a recipient
	has_many :receiving_blames, class_name: "Blame", foreign_key: :recipient_id 
	belongs_to :team
end
