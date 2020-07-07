var data = require('../data.json');

exports.view = function(request, response) {
	response.render('lost_B',data);
};
