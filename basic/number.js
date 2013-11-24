/*
 * Number类型也重写了valueOf(),toString(),toLocalString()
 * 前者返回对象表示的基本类型的数值，后者返回字符串形式的数值
 * new Number(100);
 */
var numObj = new Number(100);
console.log("typeof numObj is: " + typeof numObj);
console.log("numObj instanceof Object:" + (numObj instanceof Object)); //true
console.log("numObj instanceof Number:" + (numObj instanceof Number)); //true

/**
 * var num = 75.53425;
 */
var num = 75.53425;
console.log("typeof num is: " + typeof num); //'number'
console.log("num instanceof Object: " + (num instanceof Object)); //false
console.log("num instanceof Number:" + (num instanceof Number)); //false


var num = 1000.28313495;

/**
 * toString(radix)
 * 2、8、10、16进制
 * 默认是返回10进制数字的字符串形式
 */
console.log("toString(): " + num.toString());
console.log("toString(2): " + num.toString(2));
console.log("toString(8): " + num.toString(8));
console.log("toString(16): " + num.toString(16));



/**
 * toFixed(num);num范围0~20
 * 四舍五入为指定小数位数的数字
 */
console.log("toFixed(5) is: " + num.toFixed(5));
console.log("toFixed(6) is: " + num.toFixed(6));


/**
 * toExponential(num);num范围0~20
 * 返回指数形式的字符串
 */
console.log("typeof num.toExponential(3) is :" + typeof num.toExponential(3))
console.log("toExponential(3) is :" + num.toExponential(3));
console.log("toExponential(4) is :" + num.toExponential(4));


/**
 * toPrecision(num);num范围1~21
 * 得到某个数最合适的格式，可能会返回fixed格式，也可能返回指数格式
 */
console.log("toPrecision(1): " + num.toPrecision(1));
console.log("toPrecision(2): " + num.toPrecision(2));
console.log("toPrecision(3): " + num.toPrecision(3));
console.log("toPrecision(4): " + num.toPrecision(4));
console.log("toPrecision(5): " + num.toPrecision(5));
console.log("toPrecision(6): " + num.toPrecision(6));