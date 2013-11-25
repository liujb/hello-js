var Person = function() {};
Person.prototype = {
	constructor: Person,
	name: 'allen',
	age: 24,
	sayName: function() {
		console.log(this.name);
	},
	friends: ['sb1', 'sb2']
}

var p1 = new Person();
var p2 = new Person();
p1.friends.unshift('sb0');
console.log(p2.friends.join(','));

//p1,跟p2会共享friends对象
//所以组合使用构造函数模式跟原型模式是创建对象一个理想的状态
//如这一段代码
var P = function() {
	this.name = 'allen';
	this.age = 24,
	this.friends = ['sb1', 'sb2'];
};
P.prototype = {
	constructor: Person,
	sayName: function() {
		console.log(this.name);
	}
}
var p3 = new P();
var p4 = new P();
p3.friends.unshift('sb0');
console.log(p4.friends.join(','));