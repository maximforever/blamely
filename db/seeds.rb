mega_corp = Team.create(name: "MegaCorp Ltd.")


aaron = mega_corp.users.create(
	username: "ur_neighborhood_dev",
	name: "Aaron Davis",
	points_to_give: 100,
	points_to_redeem: 60
)


max = mega_corp.users.create(
	username: "your_next_engineer",
	name: "Max Pekarsky",
	points_to_give: 100,
	points_to_redeem: 60
)

emily = mega_corp.users.create(
	username: "em_codes",
	name: "Emily Codecraft",
	points_to_give: 100,
	points_to_redeem: 60
)

jonas = mega_corp.users.create(
	username: "steamroller",
	name: "Jonas Railsetter",
	points_to_give: 100,
	points_to_redeem: 60
)

max.blames.create(
	recipient_id: jonas.id,
	points: 10,
	message: "Tuna sandwich for lunch again? Ten points from Gryffindor!"
)

max.blames.create(
	recipient_id: emily.id,
	points: 30,
	message: "Why would you disagree with me at that meeting? We had a pact!"
)

emily.blames.create(
	recipient_id: jonas.id,
	points: 10,
	message: "Seriously with the tuna again??"
)

jonas.blames.create(
	recipient_id: max.id,
	points: 20,
	message: "This is revenge for the tuna"
)