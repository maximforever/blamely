class BlamesController < ApiController

  def create

    blame = Blame.new(blame_params)
    blame.user_id = current_user.id
    
    this_user = User.find(current_user.id)
    this_user.points_to_give -= blame.points

    user_being_blamed = User.find(blame.recipient_id)
    user_being_blamed.points_to_redeem += blame.points

    if this_user.points_to_give > 0 && blame.save && this_user.save && user_being_blamed.save

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
