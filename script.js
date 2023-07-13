function fibonacci(num) {
// your code here
	for(let i=0;i<num-1;i++){
		let ans= a+b;
		a=b;
		b=ans;
	}
	return ans;
}
let a=0;
let b=1;
module.exports = fibonacci;
