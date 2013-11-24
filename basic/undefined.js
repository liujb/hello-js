/*
 * ①Undefined类型只有一个特殊的值undefined
 * ②在使用var声明变量但是未进行初始化时，这个变量就是undefined
 * ③实际上undefined继承于Null（很隐含）
 * ④undefined主要为了区分空对象指针与未经初始化的变量
 * ⑤对于未定义的变量使用typeof也会返回undefined
 */
var message;
alert(undefined === message); //true

alert(typeof message); //undefined
alert(typeof xx); //undefined