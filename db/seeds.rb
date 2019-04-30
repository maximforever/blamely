mega_corp = Team.create(name: "MegaCorp Ltd.")


max = mega_corp.users.create(
	username: "your_next_engineer",
	name: "Max Pekarsky",
	total_points: 100
)

emily = mega_corp.users.create(
	username: "em_codes",
	name: "Emily Codecraft",
	total_points: 100
)

jonas = mega_corp.users.create(
	username: "steamroller",
	name: "Jonas Railsetter",
	total_points: 100
)

max.blames.create(
	recipient_id: jonas.id,
	points: 10,
	message: "Tuna sandwich for lunch again? Ten points from Gryffindor!"
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