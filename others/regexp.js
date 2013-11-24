/**
 * regexp.js
 * @authors Your Name (you@example.org)
 * @date    2013-11-13 09:30:59
 * @version $Id$ /^$/
 */

//匹配正整数
console.log(/^[0-9]*$/.test('12')); //true
console.log(/\d/.test('12')); //true

//匹配所有数字
console.log(/^(\-|\+)?[0-9]+(.[0-9]{0,})?$/.test('+12'));

//只能输入n位的数字
console.log(/^[0-9]{2}$/.test(22));
console.log(/^\d{2}$/.test(22));

//至少输入n位数字
console.log(/^\d{2,}$/.test(222)); //true

//只能输入2-4位数字
console.log(/^\d{2,4}$/.test(2222)); //true

//只能输入非零开头的数字
console.log(/^[1-9][0-9]*$/.test('1234'));

//只能输入0或者非零开头的数字
console.log(/^0|[0-9]*$/.test('01234'));

//只能输入两位小数的正实数
console.log(/^[0-9]+(.[0-9]{2})?$/.test(22.22));

//匹配负整数
console.log(/^(\-)[0-9]*$/.test('-10'));

//匹配长度为3的字符
console.log(/^.{3}$/.test('abc'));

//匹配字母
console.log(/^[A-Za-z]+$/.test('as'));

//匹配字母和数字
console.log(/^[A-Za-z0-9]+$/.test('sdfa1123'));

//只能由数字、下划线、字母组成的字符串
console.log(/^\w+$/.test('ad_x_12_A'));
console.log(/^[A-Za-z_0-9]*$/.test('ad_x_12_A'));

//只能输入汉字
console.log(/^[\u4e00-\u9fa5]{0,}$/.test('你好'));

//验证电话号码
console.log(/^(\d{3,4}-)?(\d{7,8})$/.test('2222222'));

//验证邮箱地址
console.log(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test('liu.jiangbei@litsoft.com.cn'));

//验证url地址

//验证手机号码

//验证身份证号码
console.log(/^\d{15}(\d{2}[0-9xX]{1})?$/.test('111111111111111'));

//验证一年中的12个月
console.log(/^(0?[1-9]|1[0-2])$/.test('01'));

//用正则表达式限制只能输入中文：onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,’’)" onbeforepaste="clipboardData.setData(’text’,clipboardData.getData(’text’).replace(/[^\u4E00-\u9FA5]/g,’’))"
//用正则表达式限制只能输入全角字符： onkeyup="value=value.replace(/[^\uFF00-\uFFFF]/g,’’)" onbeforepaste="clipboardData.setData(’text’,clipboardData.getData(’text’).replace(/[^\uFF00-\uFFFF]/g,’’))"
//用正则表达式限制只能输入数字：onkeyup="value=value.replace(/[^\d]/g,’’) "onbeforepaste="clipboardData.setData(’text’,clipboardData.getData(’text’).replace(/[^\d]/g,’’))"
//用正则表达式限制只能输入数字和英文：onkeyup="value=value.replace(/[\W]/g,’’) "onbeforepaste="clipboardData.setData(’text’,clipboardData.getData(’text’).replace(/[^\d]/g,’’))"