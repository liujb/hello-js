/**
 * 返回一个字符串数组中最长的字段
 * @param  {[type]} _array [description]
 * @return {[type]}        [description]
 */

var longestString = function (_array) {
	// _array will be an array
	// return the longest string in the array
	return _array.sort(function(x, y) {
		if (typeof x === 'string' && typeof y === 'string') {
			return x.length < y.length;
		} else {
			return true;
		}
	})[0];
}