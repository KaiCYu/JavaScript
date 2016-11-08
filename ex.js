function clock() {
	let current = new Date();
	console.log(current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds());
}

setInterval(clock, 1000);
