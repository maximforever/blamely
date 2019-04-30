class ApiController < ActionController::API

    def current_user
    	User.find_by(name: "Max Pekarsky")
    end

    def current_team
    	current_user.team
    end

    def current_blames

    	allBlames = current_team.blames.map do |blame|

    		updatedBlame = {
    			id: blame.id,
    			points: blame.points,
    			message: blame.message,
    			created_at: blame.created_at,
    			recipient: blame.recipient.username,
    			sender: blame.user.username
    		}

    	end

    	allBlames.sort { |a,b| a["created_at"] <=> b["created_at"] }
    	allBlames.reverse
    end

end