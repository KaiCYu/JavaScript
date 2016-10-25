function isPalindrome(str) {
	function reverse(){
		return str.split('').reverse().join('')
	}
	return str === reverse();
}

console.log(isPalindrome("kayak"));