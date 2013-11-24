var str1 = 'hello world';
str1.charAt(2);
str1.charCodeAt(2);
str1.concat('SB');

/*以下三个方法都会返回子字符串*/
str1.slice(1, 3);
str1.substr(1, 2);
str1.substring(1, 3);

str1.indexOf('o');
str1.lastIndexOf('l');

str1.toUpperCase();
str1.toLowerCase();
str1.toLocaleLowerCase();
str1.toLocaleUpperCase();

var text = 'cat, bat, sat, fat';
var pattern = /.at/;
var matches = text.match(pattern);
/*
 * match()本质上调用RegExp的exec()方法
 * match()只接受一个参数要么是正则表达式，要么是一个RegExp对象
 * 返回一个数组：数组的第一项是整个模式匹配的字符串，之后的每一项（如果有）保存着于正则表达式中的捕获组匹配的字符串
 */
//console.log(matches.index);
//console.log(pattern.lastIndex);
for (var i = 0; i < matches.length; i++) {
	//console.log(matches[i]);
};

/*
 * search()方法是另一个查找模式的方法，参数与match()相同
 * 返回第一个匹配项的索引，没有则返回-1。
 * search()是从字符串的开头向后查找的
 */

/*
 * replace()方法接受两个参数，
 * ①第一个参数可以是RegExp对象或者字符串（此字符串不会被解析为正则表达式）
 * 如果第一个参数为字符串那么只会替换第一个子字符串，如果想要替换所有的子字符串，就要提供一个正则表达式并且指定全局（g）模式
 * ②第二个参数可以是一个字符串或者一个函数
 */

var text2 = 'cat,bat,fat,sat';
//var res = text2.replace('at','ond');
var res = text2.replace(/at/g, 'ond'); //全部替换了at

//console.log(res);
/*需要加强EegExp相关知识*/
var res2 = text.replace(/(.at)/g, 'word ($1)');
console.log(res2);

/*
 * split()接受一个或者两个参数
 * ①第一个参数是分隔符或者正则表达式（此处不会将字符串看成正则表达式）
 * ②第二个参数可选，表示数组的大小
 */
var array = text2.split(',', 3);
for (var i = 0; i < array.length; i++) {
	console.log(array[i]);
};

/*
 * localeCompare()方法比较两个字符串的大小
 * 根据在字母表的顺序而定  前面的小为-1，后面的大为1
 */

var strVal = 'yellow';
console.log(strVal.localeCompare('red')); //1(返回的数值取决于实现，所以使用以下方式比较靠谱)
//使用localeCompare()的建议方式
function determineOrder(value) {
	var result = strVal.localeCompare(value);
	if (result > 0) {
		console.log('yellow comes after ' + value + '');
	} else if (result < 0) {
		console.log('yellow comes before ' + value + '');
	} else {
		console.log('yellow equals ' + value + '');
	}
};
determineOrder('fuck');

/*静态方法fromCharCode()*/
var xx = String.fromCharCode(103, 103, 104);
console.log(xx);