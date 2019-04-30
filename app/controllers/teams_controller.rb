class TeamsController < ApiController

	def show

		render json: {
			blames: current_team.blames,
			users: current_team.users,
			current_user: current_user
		}.to_json

	end




	

end