// The os module provides operating system-related utility methods and properties. 
const os = require('os');

setInterval( () => {

	const {totalmem, freemem} = os;

	// totalmenm returns the total amount of system memory in bytes as an integer.
	// freemem returns the total amount of free system memory in bytes as an integer.
	const tRam = totalmem() / 1024 / 1024;   // bytes => megabytes
	const fRam = freemem() / 1024 / 1024;    // bytes => megabytes
	const usage = (fRam / tRam) * 100;       // Calcula o uso da memória em percentual

	const memoryStatus = {
		TOTAL_MEMORY: `${parseInt(tRam)}: MB`,  
		FREE_MEMORY: `${parseInt(fRam)}: MB`,
		USAGE: `${ usage.toFixed(2) }: %`   
	};

	// console.clear();
	// console.table(memoryStatus); 

	exports.memoryStatus = memoryStatus;

}, 1000);
