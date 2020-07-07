var mylost = require("../mylost.json");


exports.view = function(request, response) {
	response.render('account',mylost);
};