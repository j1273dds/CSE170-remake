var mylost = require("../mylost.json");

exports.addAcc = function(request, response) {   
	var firstName = request.query.firstName;
	var lastName = request.query.lastName;
	var email = request.query.email;
	var phone = request.query.phone;
	var image = request.query.image;
	var username = request.query.username;
	var newPost = { "firstName":firstName , "lastName":lastName, "email":email,"username":username,"image":image,"phone":phone};
	mylost.account.pop();
	mylost.account.push(newPost);


	response.render('account',mylost);
}
