
Array.prototype.myEach = function (callback) {
	for ( let i = 0; i < this.length; i += 1) {
		 callback(this[i]);
	}
	return this;
}

[1,2,3,4,5].myEach(  num => {
	console.log(`square of ${num} is ${num * num}`);
});


