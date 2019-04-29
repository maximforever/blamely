class UserController < ApiController

	def index
   	@users = User.all
   	render json: @users.to_json
  end

end
