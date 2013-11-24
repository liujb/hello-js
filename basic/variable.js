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