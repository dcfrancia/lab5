// Get all of our friend data by loading our JSON fake
// 'database' file
var data = require('../data.json');

// Prints to terminal console whenever you load page
// *** ANY CHANGES MUST RESTART Node.js in terminal and reload browser
exports.view = function(request, response){
	console.log(data);
	console.log("hey maneee");
	response.render('index', data);
};