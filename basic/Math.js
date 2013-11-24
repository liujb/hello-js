/*
Math的属性:
Math.E//自然对数的底数，即常量e的值
Math.LN10//10的自然对数
Math.LN2//2的自然对数
Math.LOG2E//以2为底的对数
Math.LOG10E//以10为底的对数
Math.PI//圆周率π的值
Math.SQRT1_2//1/2的平方根
Math.SQRT2//2的平方根
		
Math的方法:
Math.max(x);//最大值
Math.min(x);//最小值
Math.random();//随机数返回0~1之间的，不包括0,1
Math.ceil(x);//向上舍入
Math.floor(x);//向下舍入
Math.round();//标准舍入（四舍五入）
Math.abs(num);//绝对值
Math.exp(num);//返回Math.E的num次幂
Math.log(num);//2的自然对数
Math.pow(num,power);//返回num的power次幂
Math.sqrt(num);//返回num的平方根
Math.acos(x);//返回x的反余弦值
Math.asin(x);//返回x的反正弦值
Math.atan(x);//返回x的反正切值
Math.atan2(y,x);//返回y/x的反正切值
Math.cos(x);//返回x的余弦值
Math.sin(x);//返回x的正弦值
Math.tan(x);//返回x的正切值
*/

/*
 * max(),min()都能接受任意多个数值参数
 * 只能传入数值
 */
var array = [10, 20, 20, 15];
//var max = Math.max(array);//得不到预期结果
var max = Math.max(10, 20, 20, 15); //20
//var max2 = Math.max('AJH','B','C','D');//得不到结果，只能传入数值
console.log(max);

/*
 * Math.ceil()向上舍入
 * Math.floor()向下舍入
 * Math.round()四舍五入（标准的）
 * */
console.log(Math.ceil(24.9)); //25
console.log(Math.ceil(24.5)); //25
console.log(Math.ceil(24.1)); //25

console.log(Math.floor(24.9)); //24
console.log(Math.floor(24.5)); //24
console.log(Math.floor(24.1)); //24

console.log(Math.round(24.9)); //25
console.log(Math.round(24.5)); //25
console.log(Math.round(24.1)); //24

/*
 * Math.random()方法返回0-1之间的随机数，不包括0和1
 * 可以利用 Math.random()从某个整数范围内随即选择一个值
 * 值 = Math.floor(Math.random()*可能值得总个数  + 最小的值);
 * 比如取2~10之间的 Math.floor(Math.random()*9 + 2);
 */
//改造成一个函数,方便得取某一个范围内的随即整数
var random = function(lower, upper) {
	var choices = upper - lower + 1;
	return Math.floor(Math.random() * choices + lower);
};
//利用以上random()可以方便的获取数组的随意一项
var colors = ['red', 'yellow', 'blue', 'black', 'brown'];
console.log(colors[random(0, colors.length - 1)]);
console.log(random(1000, 3000));