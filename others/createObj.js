//普通创建对象
var obj = new Object();
obj.name = 'allen';
obj.age = 24;

//工厂模式
var createObj = function createObj(name, age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	return obj;
};
var p = createObj('liujb', 24);
console.log(p.constructor);

//构造器模式
var P = function(name, age) {
	this.name = name;
	this.age = age;
}
var p = new P('allen', 24);
console.log(p.constructor === P); //true
console.log(P.prototype); //{}

var o = {};
P.call(o, 'liujb2', 35);
console.log(o.name); //liujb2