/**
 * var a; a此时为undefined
 *使用var关键字，否则变量将成为global
 *一定要减少使用全局变量
 */

function test() {
	//var message = 'message';
	//此处若不加var message将成为全局变量
	message = "message";
}

//console.log(message); //会出现语法错误而停止执行
test();
console.log(message); //'message',（若在brower端，此刻message是window.message）

/*
 * 验证没有块级作用域
 */
var temp = 2;
if (typeof temp == 'number') {
	var variable = 'Test';
};
alert(variable); //Test

for (var i = 0, length = 10; i < length; i++) {
	//do something you want;
};
alert(i); //10

/*
 * 延长作用域链
 * ①try-catch的catch块
 * ②with语句
 */
function buildUrl() {
	var qs = '?debug=true';
	with(location) {
		var url = href + qs;
	}
	return url;
	//到底是怎么延长作用的还是不是很明白
};
var result = buildUrl();
alert(result);

/*
 * 声明变量时一定要加var，
 * 否则变量将添加到全局环境中
 */
function add(num1, num2) {
	var sum = num1 + num2; //在外部访问sum报错误
	//sum = num1 + num2;//sum将添加到全局环境中
	return sum;
};
var result = add(10, 5);
alert(sum);