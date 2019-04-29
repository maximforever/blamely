ActiveAdmin.register User do

	permit_params :name, :username, :points, :team_id

end
