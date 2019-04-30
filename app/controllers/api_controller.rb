class ApiController < ActionController::API

    def current_user
    	User.find_by(name: "Max Pekarsky")
    end

    def current_team
    	current_user.team
    end

end