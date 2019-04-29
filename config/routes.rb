Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  scope '/api' do
	  get  '/users',  to: 'user#index'
	  get  '/blames',  to: 'blame#index'
	  get  '/teams',  to: 'team#index'

	end






end
