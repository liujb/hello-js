var P = function() {};
var p1 = new P();
var p2 = new P()
console.log(p1.__proto__ === P.prototype); //true
console.log(p1.__proto__ === p2.__proto__); //false
console.log(p1 === p2); //false