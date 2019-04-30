class BlamesController < ApiController

  def create

    blame = Blame.new(blame_params)
    blame.user_id = current_user.id
    
    this_user = User.find(current_user.id)
    this_user.points_to_give -= blame.points

    if this_user.points_to_give > 0 && blame.save && this_user.save

      render json: {
        status: "200 Success!",
        blames: current_blames,
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
