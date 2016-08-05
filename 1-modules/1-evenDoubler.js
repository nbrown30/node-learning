var maxTime = 1000;

//if even, double
//else throw err
var evenDoubler = function(val, callback) {
	var waitTime = Math.floor(Math.random() * (maxTime + 1));
	if(val % 2 == 0) {
		setTimeout(function() {
			callback(null, val * 2, waitTime);
		}, waitTime);
		return val * 2;
	} else {
		setTimeout(function() {
			callback(new Error( val + ' is an odd number or invalid value.'))
		}, waitTime);
	}
};

var handleResults = function(err, results, time) {
	if(err) {
		console.log('ERROR: ' + err.message);
	} else {
		console.log('Results: ' + results + ' (' + time + ' ms)');
	}
};

for(var i = 0; i < 10; i++) {
	evenDoubler(i, handleResults);
	if(i === 10) {
		console.log('DONE!');
	}
}

/*

evenDoubler(2, handleResults);
evenDoubler(3, handleResults);
evenDoubler(10, handleResults);

*/


console.log('-----');