class BlamesController < ApiController

  def create

    blame = Blame.new(blame_params)

    if blame.save 
      render json: {
        status: "200 Success!",
        blame: blame.as_json()
      }
    else
      render json: {
        status: "500 something went wrong",
        errors: blame.errors.as_complete_message
      }
    end

  end

  private

  def blame_params
  	params.require(:blame).permit(:user_id, :recipient_id, :message, :points)
  end

end
