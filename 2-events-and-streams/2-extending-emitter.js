var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function(){
	console.log('START');
});

r.on('data', function(d) {
	console.log('    Received data = ' + d);
});

r.on('end', function() {
	console.log('FINISH');
});