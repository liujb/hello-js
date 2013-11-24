/**
 *
 * @authors Your Name (you@example.org)
 * @date    2013-11-11 11:44:50
 * @version $Id$
 */

/*此函数用来调用其他函数*/
var callFunction = function(func, args) {
	return func(args);
};
/*加法*/
var add = function(num) {
	return num + 10;
};
/*访问add函数的指针*/
var result = callFunction(add, 10);
alert(result); //20
/*以上代码将函数传递给另一个函数*/
/*以下代码将函数作为一个值返回*/
/*
 * 此函数的作用是根据对象的【某个属性】进行排序
 * 作用于数组排序data.sort(createComparisonFunction);
 */
var createComparisonFunction = function(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
};

var data = [{
	name: 'Allen',
	age: 23
}, {
	name: 'BBBB',
	age: 19
}];
data.sort(createComparisonFunction("age "));
alert(data[0].name);
alert(data[1].name);