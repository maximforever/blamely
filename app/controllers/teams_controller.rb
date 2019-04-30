class TeamsController < ApiController

	def show

		team_blames = current_team.blames.order(created_at: :asc)

		render json: {
			blames: team_blames,
			users: current_team.users,
			current_user: current_user
		}.to_json

	end




	

end