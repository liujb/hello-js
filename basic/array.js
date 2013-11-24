/**
 * 关于数组的说明
 * ①数组的length属性不只是只读的，可以动态被设置，
 * 可以通过设置length属性新增或者移除数组的项
 * ②使用字面量表示数组的时候数组的最后一项不应该再有逗号
 * 如['a','b',]这个逗号强烈建议不能有，因为各个浏览器之间差异很大
 */

//如果不对其进行初始化，每一项都会是undefined
var arr = new Array(20);

//创建数组并初始化
var arr2 = new Array('Allen', 'Shangrong', 'women');

//创建数组后一个个进行赋值
var array = new Array(3);
array[0] = 'allen';
array[1] = 'wife';
array[2] = 'son';
console.log(array);

//使用字面量表示数组
var names = ['allen', 'SB', '呜呜呜'];
console.log(names);



/**
 * ①数组的toString()会调用每一项的toString()方法
 * ②数组的toLocaleString()会调用每一项的toString()方法
 * ③join()方法会使用特定的分割符来构建toString()这个方法中返回的逗号
 * ④如果数组中的每一项为null或者undefined 那么结果中将返回空字符串
 */

//console.log()会接受"字符串参数"，所以在后台会调用names.toString();
//所以结果与names.toString()一样
console.log(names);
console.log(names.toString());

//调用数组的toString(),与valueOf()会返回相同的值
console.log(names.valueOf());
console.log(names.toLocaleString());

var person1 = {
	toLocaleString: function() {
		return 'Allen';
	},
	toString: function() {
		return 'Allen';
	}
};

var person2 = {
	toLocaleString: function() {
		return 'Wife';
	},
	toString: function() {
		return 'husband';
	}
};

var persons = [person1, person2];
console.log(persons.join('||'));
console.log(persons.toString());
console.log(persons.toLocaleString());