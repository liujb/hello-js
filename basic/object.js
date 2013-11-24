var obj = new Object();
obj.name = 'ALLEN';
Object.prototype.age = 23;

//constructor保存着用于创建当前对象的函数
console.log(typeof obj.constructor); //function
console.log(obj.constructor == Object) //true

//检测当前的属性是否在实例中
console.log(obj.hasOwnProperty('name')); //true
console.log(obj.hasOwnProperty('age')); //false

//用于检测传入的对象是否在另一个对象的原型中
console.log(Object.isPrototypeOf(obj)); //false
console.log(Object.prototype.isPrototypeOf(obj)); //true

console.log(obj.toString()); //object Object
console.log(obj.valueOf()); //object Object
//属性是否可用于for-in枚举
console.log(obj.propertyIsEnumerable('name')); //true

//var person = new Object();
//var person = {};两者完全等价
/*
 * new 操作符创建对象
 */
var person = new Object();
person.name = 'Allen';
person.age = 23;
console.log(person.age);
console.log(person['name']); //使用方括号来访问属性有好处

/*
 * 使用对象字面量来创建对象
 */
var antherPerson = {
	name: 'allen',
	age: 23
};
//console.log(antherPerson.name);

/*
 * 使用对象字面量传递多个参数
 */
function displayInfo(args) {
	var res = '';
	if (typeof args.name == 'string') {
		res += 'Name ' + args.name + '\n';
	}
	if (typeof args.age == 'number') {
		res += 'Age ' + args.age + '\n';
	}
	console.log(res);
};

displayInfo({
	name: 'SX',
	age: 23
});