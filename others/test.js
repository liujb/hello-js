/**
 * test.js
 * @authors Your Name (you@example.org)
 * @date    2013-11-14 11:04:38
 * @version $Id$
 */

var obj2Body = function(obj) {
	var res = '';
	if (obj) {
		for (var p in obj) {
			if (obj.hasOwnProperty(p)) {
				res += '&' + p + '=' + obj[p] + '';
			} else {}
		};
	} else {}
	return res.replace(/^\&/, "");
};

var obj = {
	name: 'jiangbei',
	age: 23,
	love: 'grils'
};

console.log(obj2Body(obj));


function init7() {
	var pAry = document.getElementsByTagName("p");
	for (var i = 0; i < pAry.length; i++) {
		pAry[i].onclick = Function('alert(' + i + ')')
	}
}