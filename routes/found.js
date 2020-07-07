var data = require('../data-found.json');

exports.viewLF = function(req, res) {
   res.render('lost', data);
};


