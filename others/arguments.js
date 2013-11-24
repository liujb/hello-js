//function add
var add = function(a, b) {
	console.log(arguments.length);
	console.log("add.arguments.callee.caller: " + arguments.callee.caller);
	return a + b;
};

console.log("add.length: " + add.length + " prototype: " + add.prototype);
var sum = add(1, 3);
console.log(sum);