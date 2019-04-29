class BlameController < ApiController

	def index
   	@blames = Blame.all
   	render json: @blames.to_json
  end

end
