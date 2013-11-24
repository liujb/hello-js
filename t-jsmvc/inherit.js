var Animal = function() {};

Animal.prototype.breath = function() {
	console.log('breath');
};

var Dog = function() {};

//这就是原型继承的精髓所在
Dog.prototype = new Animal;

Dog.prototype.wag = function() {
	console.log('wag tail');
};

var dog = new Dog;
dog.wag();
dog.breath();