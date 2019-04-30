class BlamesController < ApiController

  def create

    blame = Blame.new(blame_params)
    blame.user_id = current_user.id

    team_blames = current_team.blames.order(created_at: :asc)

    
    this_user = User.find(current_user.id)
    this_user.total_points -= blame.points


    if this_user.total_points > 0 && blame.save && this_user.save
      render json: {
        status: "200 Success!",
        blames: team_blames,
        user: this_user
      }
    else
      render json: {
        status: "500 something went wrong",
        errors: blame.errors
      }
    end

  end

  private

  def blame_params
  	params.require(:blame).permit(:recipient_id, :message, :points)
  end

end
