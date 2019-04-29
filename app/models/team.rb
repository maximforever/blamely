class Team < ApplicationRecord
	has_many :blames
	has_many :users
end
