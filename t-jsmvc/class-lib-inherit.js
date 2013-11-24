var Class = function(parent) {
	var klass = function() {
		this.init.apply(this, arguments);
	};
	//parent作为新对象的父类
	if (parent) {
		var subclass = function() {};
		subclass.prototype = parent.prototype;
		klass.prototype = new subclass;
	} else {}
	klass.prototype.init = function() {};
	klass.fn = klass.prototype;
	klass.fn.parent = klass;

	klass._super = klass.__proto__;

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
var Animal = new Class;
Animal.include({
	breath: function() {
		console.log('breath...');
	}
});

var Dog = new Class(Animal);
var tom = new Dog;
tom.breath();