/**
 * Date.js
 */

//获取当前时间
var date = new Date();
console.log("Object.prototype.toString.apply(date, null): " + Object.prototype.toString.apply(date, null));
console.log("date.toString(): " + date.toString());
console.log("date.toLocaleString(): " + date.toLocaleString());
console.log("date.valueOf(): " + date.valueOf()); //返回毫秒数

//Date.parse接受可转换为日期的字串
//返回毫秒数
var ts = Date.parse('May 25,2013');
console.log("Date.parse('May 25,2013'): " + ts);

//Date.UTC(2013, 4, 25, 0, 0, 0)接受年、月、日...数字
//返回毫秒数
var ts2 = Date.UTC(2013, 4, 25, 0, 0, 0);
console.log("Date.UTC(2013, 4, 25, 0, 0, 0): " + ts2);

//实例化一个指定的时间
//Date()可以接受一个毫秒数
//Date()可以接受年、月、日....指定时间
var date2 = new Date(2013, 10, 12);
console.log(date2.toString());


/**
 *返回Date格式的年、月、日数组
 */
var dateArray = function(date) {
	if (Object.prototype.toString.call(date, null) === '[object Date]') {
		var year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hours = date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			millSecond = date.getMilliseconds();
		return [].concat(year, month, day, hours, minutes, seconds, millSecond);
	} else {}
};
console.log("dateArray(new Date()): " + dateArray(date));


/**
 * 返回中国格式的日期比如2013年11月24日
 */
var chineseDate = function(date) {
	if (Object.prototype.toString.call(date, null) === '[object Date]') {
		var year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hours = date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			millSecond = date.getMilliseconds();
		return year + '年' + month + '月' + day + '日' + hours + '时' + seconds + '分' + seconds + '秒' + millSecond + '毫秒';
	} else {
		return "请输入正确的日期";
	}
};
console.log("chinaFormatDate(new Date()): " + chinaFormatDate(date));

/**
 * 返回中国传统年月份
 */
var chineseDate = function(date, isTradtion) {
	if (Object.prototype.toString.call(date, null) === '[object Date]') {
		var s_c_Nnm = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
			t_c_num = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
			date_ary = dateArray(date);
		return isTradtion === true ? "" : "";
	} else {
		return "请输入正确的日期.";
	}
}

/**
 * 返回两个日期相隔多久
 */
var diff = function(date_1, date_2) {
	return "";
}