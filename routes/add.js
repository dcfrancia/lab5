var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	

	var newFriend = {
		'name': request.query.name,
		'description': request.query.description,
		'imageURL': 'http://lorempixel.com/400/400/people/'
	}

	console.log(newFriend.name);
	console.log(newFriend.description);
	data["friends"].push(newFriend);

	response.render('add', {
		"name": newFriend,
	});

 }