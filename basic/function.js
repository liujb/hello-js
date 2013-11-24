/**
 * 对于ECMAScript中的引用类型而言，prototype是保存它们所有实例方法的真正所在
 * 诸如toString()和valueOf()等方法都在prototype属性下
 */

/**
 * 函数表达式
 */
var sum = function(value1, value2) {
	return value1 + value2;
};


/**
 * 函数声明
 */
function sum(value1, value2) {
	return value1 + value2;
};


/**
 * 永远都不建议这样写，这样写的话函数要被解析两次
 * ①解析常规ECMAScript代码
 * ②解析传入构造函数的字符串，会影响性能
 */
var sum = new Function("value1", "value2", "return value1+value2");


/**
 * 没有重装，这个函数会覆盖掉上面的函数
 */
function sum(value1, value2) {
	return value1 + value2 + 100;
};


/**
 * 此函数用来调用其他函数（其实就是回调）
 */
var callFunc = function(func, args) {
	return func(args);
};
var add = function(num) {
	return num + 10;
};
var result = callFunc(add, 10); //访问add函数的指针
console.log("function as a parameter: " + result); //20
/*以上代码将函数传递给另一个函数*/



/*以下代码将函数作为一个值返回*/

/*
 * 此函数的作用是根据对象的【某个属性】进行排序
 * 作用于数组排序data.sort(compare);
 */
var compare = function(prop) {
	return function(obj1, obj2) {
		var val1 = obj1[prop],
			val2 = obj2[prop];
		if (val1 < val2) {
			return -1;
		} else if (val1 > val2) {
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
console.log("Before sort: ")
console.log(data);
data.sort(compare("age"));
console.log("After sort: ")
console.log(data);


/**
 * 函数的arguments属性
 * 斐波拉函数
 */
var factorial = function(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
};
console.log("斐波拉契函数之调用自身: " + factorial(5)); //120
/*arguments.callee属性是一个指针，指向拥有arguments对象的函数*/
function trueFactorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
};
//将函数指针保存到factorial2变量中
var factorial2 = trueFactorial;
trueFactorial = function(num) {
	return 0; //故意将函数返回结果置为0
};
console.log("斐波拉契函数之调用arguments.callee: " + factorial2(5)); //factorial2保存的是trueFactorial的指针，所以还能得到正确结果
console.log("重写了斐波拉契函数: " + trueFactorial(5)); //只能返回0了！


/**
 * 函数的length的属性表示函数希望接受的命名参数的个数
 */
var sayHello = function(userName) {
	console.log(userName);
};
console.log("function sayHello's length: " + sayHello.length);



/*
 * 每个函数都包含apply(),call()方法
 * 这两个方法的作用都是在"特定的作用域"中调用函数
 * 只是传递参数的方式有所不同而已
 * apply()和call()真正的用武之地是扩充函数赖以运行的作用域
 */
function sum(num1, num2) {
	return num1 + num2;
};

function callSum1(num1, num2) {
	return sum.apply(this, arguments);
};

function callSum2(num1, num2) {
	return sum.apply(this, [num1, num2]);
};

function callSum3(num1, num2) {
	return sum.call(this, num1, num2);
};
// console.log(sum.apply(this, [3, 4]));
// console.log(callSum1(10, 3));
// console.log(callSum2(10, 3));
// console.log(callSum3(10, 3));

/**
 * 以下代码演示call()、apply()扩充作用域的情况
 * 使用apply()或者call来扩充作用域最大的好处就是对象不需要与方法有任何耦合
 */
var g = {};
var o = {};
g.color = 'blue';
o.color = 'red'

function showColor() {
	console.log(this.color);
};
showColor.apply(g); //blue
showColor.apply(o); //red