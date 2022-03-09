// The os module provides operating system-related utility methods and properties. 
const os = require('os');

setInterval( () => {

	const { arch, platform, version, release, hostname, cpus } = os;

	const soStatus = {
		OS: platform(),
		ARCH: arch(),
		VERSION: version(),
		RELEASE: release(),
		HOSTNAME: hostname(),
		CPUS: cpus(),
	};

	// console.clear();
	// console.table(soStatus); 

	exports.soStatus = soStatus;

}, 1000);
