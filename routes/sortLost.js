var data = require('../data.json');
var dataFound = require('../data-found.json');

exports.view = function(request, response) {
  	arrangebyNew(data);
	response.render('lost',data);
};

//get the time 
function arrangebyNew(data){
    data.posts.sort(function(a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return c-d;
  });    
}