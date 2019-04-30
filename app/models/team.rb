class Team < ApplicationRecord
	has_many :users
	has_many :blames, through: :users
end
