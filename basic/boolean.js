/**
 * 1.Boolean重写了valueOf(),toString()前者返回基本类型值true或者false，
 * 后者返回字符串'true'或者'false'
 * 2.Boolean对象在布尔环境中总是会返回true，
 * 所以在使用Boolean对象时常常会给人造成误解，所有强烈不建议使用Boolean类型
 * 3.typeof操作符操作基本类型值返回'boolean'，
 * 而typeof Boolean的对象总是会返回'object'
 * 4.instanceof操作Boolean的对象返回true，
 * 操作基本类型值返回false
 */
var falseObj = new Boolean(false);
var result = falseObj && true;
console.log("new Boolean(false/true)总会返回true? " + result); //true
console.log("typeof false is: " + typeof false); //boolean
console.log("typeof of new Boolean(false) is: " + typeof falseObj); //object
console.log("false instanceof Boolean: " + (false instanceof Boolean)); //false
console.log("falseObj instanceof Boolean: " + (falseObj instanceof Boolean)); //true
console.log("falseObj instanceof falseObj " + (falseObj instanceof Object)); //true


/**
 * Boolean有两个字面量true、false（注意大小写）
 * ECMAScript中的所有类型的值都与这两个Boolean值有等价关系
 * 要将一个值转换为Boolean的字面量可以调用Boolean()方法
 */

//任何非空字符串都会返回true
var str = 'hello,someone like you!';
var str2 = '';

//非0的数字都会返回true
var num = 10;
var bool = false;

//任何非null的对象都会返回true
var obj = null;
obj = {};

//undefined会返回false
var undefinedV = undefined;

if (str) {
	console.log("string_to_boolean: 非空字符串转换为bool返回true.");
}
if (!str2) {
	console.log('string_to_boolean: 空字符串装换为bool返回false.');
}
if (num) {
	console.log("number_to_boolean: 除0外所有所有数字转换为bool返回true.");
}
if (-1) {
	console.log("number_to_boolean: 除0外所有所有数字转换为bool返回true.");
}
if (!0) {
	console.log("number_to_boolean: 除0外所有所有数字转换为bool返回true.");
}
if (obj) {
	console.log('object_to_boolean: 除null外所有对象都会返回true.')
}