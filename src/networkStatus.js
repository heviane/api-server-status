// The os module provides operating system-related utility methods and properties. 
const os = require('os');

setInterval( () => {

	const { networkInterfaces } = os;

	const networkStatus = {
		NetworkInterfaces: networkInterfaces()
	};

	// console.clear();
	// console.table(networkStatus); 

	exports.networkStatus = networkStatus;

}, 1000);
