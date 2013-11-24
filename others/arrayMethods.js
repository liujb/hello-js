var empty = [];
var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nice'];
var num_objs = {
	'0': 'zero',
	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine'
};

/* 
关于length
1、数组的length为动态的，所以js中不会发生数组越界的情况
2、arr[arr.length] = 'value';相同于arr.push('value');个人不建议这么做。
*/
// empty[2] = 1;
// console.log(empty[2]);//1
// console.log(empty.length);//3

/*
删除数据元素
1、会在数组中留下一个空洞
2、推荐使用splice方法来删除数组中的元素
*/
// delete empty[2];
// console.log(empty.length);//0

/*
验证对象为数组
1、is_array_1识别不同的窗口或者frame里构造的数组时会失败
2、is_array_2非常好
*/
// var is_array_1 = function(obj){
// 	return obj && 
// 		typeof obj === 'object' &&
// 		obj.constructor === Array;
// };

// var is_array_2 = function(obj){
// 	return Object.prototype.toString.apply(obj) === '[object Array]';
// };

/*
concat方法：
1、产生一个新数组，包含一份array的浅复制
2、把一个或多个参数附加在其后
*/
// empty[0] = 'empty';
// var willPush = 'allen';
// var arr_2 = [1,2,3];
// var concatted = empty.concat(willPush,arr_2,true);
// console.log(concatted.join(' '));//empty allen 1 2 3 true

/*
join方法
1、默认的分隔符是逗号
2、对于IE6,7,8而言，join的效率要高于+号，而对于IE8以后大多数浏览器都是对+进行了优化，比join效率还高
*/
// var arr = ['a','b'];
// console.log(arr.join(''));//ab

/*
reverse方法
1、反转array里面元素的顺序并返回array本身
*/
// var arr = ['a','b','d','c'];
// console.log(arr.reverse().join(''));//cdba

/*
sort方法
1、排序，但是不能正确的给一组数组排序（有你何用，简直很操蛋）
2、默认将比较的元素都视为字符串
3、幸运的是可以使用自己的函数来替换默认的比较函数
4、（相等返回0，如果你想第一个参数在前面应该返回正数，如果想第二个参数在前面应该负数）
*/
// var nums = [2,4,1,8,3,11,1];
// //console.log(nums.sort().join(','));//1,1,11,2,3,4,8
// nums.sort(function(a,b){
// 	return a-b;
// });//可以任意的扩展你想要的排序函数
// console.log(nums.join(','));//1,1,2,3,4,8,11

//做简单的数值以及字符串都可以进行排序的sort的比较方法

// function(a, b) {
// 	if (a === b) {
// 		return 0;
// 	} else {}
// 	if (typeof a === typeof b) {
// 		return a < b ? -1 : 1;
// 	} else {}
// 	return typeof a < typeof b ? -1 : 1;
// };

//两个对象指定特定的属性进行比较的比较函数
var by = function(propertyName) {
	return function(obj1, obj2) {
		var a, b;
		if (typeof obj1 === 'object' &&
			typeof obj2 === 'object' &&
			obj1 && obj2) {
			a = obj1[propertyName],
			b = obj2[propertyName];
			if (a === b) {
				return 0;
			} else {}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			} else {}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'ERROR',
				message: 'Excepted an object when sorting by ' + propertyName
			};
		}
	};
};

/*
push方法
1、往数组的尾部添加新的元素，可以接受单个对象或者数组
2、返回新数组的长度
*/
// var arr_3 = [1, 2, 3];
// var len = empty.push(arr_3);
// console.log(len);
// console.log(empty.join(','));
// 

/**
 * shift：从首部移除一个元素，并返回数组的长度
 *
 */
var arr_3 = [1, 2, 3];
var res = arr_3.shift();
console.log(arr_3.join(','));
console.log(typeof res);//number
console.log(arr_3.length);

/**
 * unshift：从首部添加一个元素，并返回数组的长度
 */
var arr_4 = [1, 'allen', true, {}];
var res = arr_4.unshift('ae');
console.log(arr_4.join(',')); //ae,1,allen,true,[object Object]
console.log(res); //5

/**
 * pop:从尾部移除一个元素，并返回数组
 */
var arr_6 = [1, 'allen', true, 'fuck'];
var res = arr_6.pop();
console.log(arr_6.join('|')); //1|allen|true
console.log(typeof res); //string
console.log(arr_6.length);