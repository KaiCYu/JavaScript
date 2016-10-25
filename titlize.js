function titleize(arr, callback) {
	let caps = arr.map(k => `Mx. ${k} Jingleheimer Schmidt`);
	callback(caps);
} 


titleize(["Mary", "Brian", "Leo"], (arr) => {arr.forEach(k => console.log(k)} );