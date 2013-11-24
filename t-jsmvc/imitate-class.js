/**
 * [Class 一个"类"库]
 * @type {[type]}
 */
var Class = function() {
	var klass = function() {
		this.init.apply(this, arguments);
	};

	klass.prototype.init = function() {};

	//将klass的原型存储到fn属性中
	klass.fn = klass.prototype;

	//相当于一个对象的原型的constructor属性就是本身
	//实际就是定义类的别名（但是为何这么做？）
	klass.fn.parent = klass;

	// 给类添加属性
	klass.extend = function(obj) {
		var extended = obj.extended;
		for (var i in obj) {
			klass[i] = obj[i];
			//一个类添加静态属性
		};
		if (extended) {
			extended(klass); //如果存在回调函数则执行
		} else {}
	};

	// 给所有实例添加属性
	klass.include = function(obj) {
		var included = obj.included;
		for (var i in obj) {
			klass.fn[i] = obj[i];
			//给实例添加属性
		};
		if (included) {
			included(klass); //如果存在回调函数则执行
		} else {}
	};
	return klass;
};

/**
 * [Person 新建一个Person类，基于Class对象]
 * @type {Class}
 */
var Person = new Class;

// 给Person类添加静态属性
Person.extend({
	find: function(id) {
		// body...
	},
	exists: function(id) {
		// body...
	},
	//定义回调函数，这个obj指的就是Person
	extended: function(obj) {
		//console.log(obj, " was extended.");
	}
});

// 给Person的实例添加属性
Person.include({
	name: 'person1',
	save: function(obj) {
		console.log('saving....');
	},
	destory: function(id) {
		// body...
	},
	included: function(obj) {
		// 这个included方法是回调函数，传入的参数obj是一个Person的实例
		console.log(this.name + " test");
	}
});

var p = new Person();
p.save();
p.included();