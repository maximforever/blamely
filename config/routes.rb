 Rails.application.routes.draw do  
  scope '/api' do

	  get '/teams/megacorp',  to: 'teams#show'
	  post '/blames', to: 'blames#create'

	end
end
