/*
toExponential()方法
1、将number转化成指数形式的字符串！
2、toExponential(fractionDigits)
*/
var num = 12000000;
var num_str = num.toExponential(3);
console.log(num_str);

/*
toFixed()方法
1、将number转换成为一个十进制形式的字符串！
2、可选参数是小数点的位数，范围0-20
*/
var number = 2001.2323;
var num_str2 = number.toFixed(2);
console.log(num_str2); //2001.23

/*
toPrecision()方法
1、将number转换为一个十进制形式的字符串
2、可选参数控制精度，范围0-21
*/
var number = Math.PI;
var num_str2 = number.toPrecision(5);
console.log(num_str2); //3.1416精度为5

/*
toString(radix)方法
1、将number转换成一个字符串
2、radix是一个2-36之间的整数，默认是10
*/
console.log(Math.PI.toString(2));
console.log(Math.PI.toString(8));
console.log(Math.PI.toString(10));
console.log(Math.PI.toString(16));