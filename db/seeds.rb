AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')


mega_corp = Team.create(name: "MegaCorp Ltd.")


max = mega_corp.users.create(
	username: "your_next_engineer",
	name: "Max Pekarsky",
	points: 100
)

mega_corp.users.create(
	username: "em_codes",
	name: "Emily Codecraft",
	points: 100
)

mega_corp.users.create(
	username: "steamroller",
	name: "Jonas Railsetter",
	points: 100
)

max.blames.create(
	recepient: "steamroller",
	points: 10,
	message: "Tuna sandwich for lunch again? Ten points from Gryffindor!"
)