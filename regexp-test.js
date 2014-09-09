var logMatches = function(arr) {
    if (arr) {
        for (var p in arr) {
            console.log(p + " => " + arr[p]);
        }
    }else{
        console.log('null');
    }
};

var reg = /ab/ig;
var text = "nihaoabcabddabef";
// logMatches(reg.exec(text));

var reg = /.at/g;
var text = 'bat,cat,sat,fat';
// logMatches(reg.exec(text));

var reg = /ss$/g;
// console.log(reg.test('dssdss'));
// 执行完test之后，reg的lastIndex为6，
// 所以此刻再执行reg的exec方法，捕获到的匹配项目为null
// 这就是g的作用，去掉g，就不会更新lastIndex属性
// g的作用是，正则表达式将用于所有字符串，而不是发现第一个字符串之后立即停止
// exec方法在使用了g之后会更新reg的lastIndex属性，
// 下一次exec的时候会从lastIndex（表示开始搜索下一个匹配项的开始位置）开始匹配
// 如果不加上 ? ，exec只会有一个匹配项
console.log(reg.lastIndex);
// logMatches(reg.exec('dssdss'));


var reg = /javascript/;
console.log(reg.test('javascript')); //true
console.log(reg.test('dsjavascriptsd')); //true

var reg = /^javascript$/;
console.log(reg.test('javascript')); //true
console.log(reg.test('psdsdjavascript')); //false

var regexp = /(href|src)\s*=\s*(?:(")([^"]*)|(')([^']*)|([^'"\s>]+))|url\s*\((?:(")([^"]+)|(')([^']+)|([^'"\)]+))|asyncLoadJs\s*\((?:(')([^']*)|(")([^"]*))[a-z|\/|\\]*\.js/ig;
// var ss = /asyncLoadJs\s*\((?:(")([^"]+)|(')([^']+)|([^'"\)]+))/ig;
var xx = /asyncLoadJs\s*\((?:(")([^"]*)|(')([^']*))[a-z|\/|\\]*\.js/ig;
// var xx = /asyncLoadJs\s*\((?:(')([^']*)|(")([^"]*))[a-z|\/|\\]*\.js/ig
var log = console.log;
// ([^"]*)
// ([^']*)
// (?:(")|('))

var txt1 = 'src="/static/base.js"';
var txt2 = "src='/static/base.js'";

var txt3 = 'href="/static/base.css"';
var txt4 = "href='/static/base.css'";

var txt5 = 'url("/static/base.css")';
var txt6 = "url('/static/base.css')";

var txt7 = "asyncLoadJs('/static/base.js";
var txt8 = 'asyncLoadJs("/static/base.js';
// var txt = "asyncLoadJs('sfa/dAAFS.js";


// log("1 "+regexp.test(txt1));
// log("2 "+regexp.test(txt2));
// log("3 "+regexp.test(txt3));
// log("4 "+regexp.test(txt4));
// log("5 "+regexp.test(txt5));
// log("6 "+regexp.test(txt6));
// log("7 "+regexp.test(txt7));
// log("8 "+regexp.test(txt8));
// log("txt "+regexp.test(txt));

// log(xx.test(txt7));
// log(xx.test(txt8));