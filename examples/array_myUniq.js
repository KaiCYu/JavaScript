var arr = [5,4,3,2,1,2,3,4,5];

Array.prototype.myUniq = function () {
	let uniq = [];

	for(let i = 0; i < this.length; i+=1) {
		if (uniq.includes(this[i])) {
			continue;
		} else {
			uniq.push(this[i]);
		}
	}
	return uniq;
}

console.log(arr.my_uniq());
