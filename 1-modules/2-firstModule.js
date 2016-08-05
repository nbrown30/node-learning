var os = require('os');

var toMb = function(f) {
	var mb = (((f / 1024 / 1024) * 100) / 100);
	var roundedMb = Math.round(mb);
	return roundedMb;
}

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log();