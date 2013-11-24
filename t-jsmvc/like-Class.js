//如果你的构造函数中不返回任何内容，就会返回this-也就是当前上下文
//Class函数用于返回一
var Class = function() {
	var klass = function() {
		this.init.apply(this, arguments);
		//此处的this指的就是新创建的对象
		console.log(this.constructor);
	};
	klass.prototype.init = function() {}
	return klass; //返回一个函数
};

// Person就是变成了一个类，可以用于去实例化对象
// 其实Person现在就是那个klass函数了！
var Person = new Class; //var Person = new Class();

//给Person这个func添加一个output方法
Person.output = function() {
	console.log('output something.');
}
// 给Person这个func添加一个na属性
Person.na = 'Class\'s name property.';

//调用Person类的静态方法和函数
Person.output(); // output something.
console.log(Person.na);


// 基于Person的实例做初始化
// Person.prototype.xxx也就是给实例添加方法和属性
Person.prototype.init = function() {
	this.name = 'Instance\'s name property.';
	//此处this指的就是Person.prototype
};

// 实例化一个Person对象
var person = new Person;
// 调用Person的实例属性
console.log(person.name);