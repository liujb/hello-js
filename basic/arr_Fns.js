var data = [1, 2, 3, , 4, 5, ];


/**
 * 数组的length为动态的，所以js中不会发生数组越界的情况
 * data[data.length] = 'value';相同于data.push('value');个人不建议这么做。
 */
console.log("length: " + data.length);


/**
 * 验证数组
 */
var is_array = function(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
};
console.log("is_array: " + is_array(data));

/**
 * join(separator)
 * 默认的分隔符是逗号
 * 对于IE6,7,8而言，join的效率要高于+号，
 * 而对于IE8以后大多数浏览器都是对+进行了优化，比join效率还高
 */
console.log("join: " + data.join());
console.log("join: " + data.join('&'));


/**
 * concat(arr1,arr2...)
 * 参数可以是任何类型的对象包括数组
 */
var concat_Array = data.concat('abc', [6, 6]);
console.log("concat: " + concat_Array.join(","));


/**
 * reverse()
 * 反转array里面元素的顺序并返回array本身
 */
console.log("revser: " + data.reverse().join(','));


/**
 * push(ele)
 * 往数组的尾部添加新的元素，可以接受单个对象或者数组
 * 返回新数组的长度
 */
var push_Array_Len = data.push("LastElement");
console.log("push: " + push_Array_Len);
console.log("push: " + data.join(','));


/**
 * shift()
 * 从首部移除一个元素
 * 并返回数组的长度
 */
var shif_Array_Len = data.shift();
console.log("shift: " + shif_Array_Len);
console.log("shift: " + data.join(','));


/**
 * unshift()
 * 从首部添加一个元素
 * 返回数组的长度
 */
var unshift_Array_Len = data.unshift("A");
console.log("unshift: " + unshift_Array_Len);
console.log("unshift: " + data.join(','));


/**
 * pop()
 * 从尾部移除一个元素
 * 并该元素
 */
var pop_Array_Ele = data.pop();
console.log("pop: " + pop_Array_Ele);
console.log("pop: " + data.join());


/**
 * slice(start,end);
 * 数组进行浅复制，原数组不受影响
 * 若位指定end将达到length
 * 若有负数会跟length作和，若求和后start>end将返回空数组
 */
var sliceArray = data.slice(-2, 5); //相当于data.slice(-2+data.length,5);
console.log("slice: " + data);
console.log("slice: " + sliceArray.length)
console.log("slice: " + sliceArray.join(","));


/**
 * data.splice(index,howmany,item1,.....,itemX);
 * 删除data数组中从index开始的howmany项目
 * 并将这两项作为新的数组返回
 * splice方法一定会返回数组对象
 * 若index为负数也会跟data.length做和
 */
console.log("splice: " + data);
var splice_Array = data.splice(-3, 4, "abc", "def");
console.log("splice: " + data);
console.log("splice: " + data.length);
console.log("splice: " + splice_Array.join(','));


/**
 * 删除数据元素
 * delete会在数组中留下一个空洞
 * 推荐使用splice方法来删除数组中的元素
 */
console.log("delete: " + data);
delete data[0];
console.log("delete: " + data);
data.splice(0, 1);
console.log("delete: " + data);


/**
 * sort([fn])
 * 排序，但是不能正确的给一组数组排序（有你何用，简直很操蛋）
 * 默认将比较的元素都视为字符串
 * 幸运的是可以使用自己的函数来替换默认的比较函数（相等返回0，如果你想第一个参数在前面应该返回正数，如果想第二个参数在前面应该负数）
 */
var data = [2, 4, 1, 8, 3, 11, 1];
data.sort(function(a, b) {
	return a - b;
}); //可以任意的扩展你想要的排序函数
console.log("sort: " + data.join(',')); //1,1,2,3,4,8,11

/**
 * 最简单的比较方法
 */
var compare = function(value1, value2) {
	return value1 - value2;
};

/**
 * 简单的数值以及字符串都可以进行排序的sort的比较方法
 */
var compare = function(a, b) {
	if (a === b) {
		return 0;
	} else {}
	if (typeof a === typeof b) {
		return a < b ? -1 : 1;
	} else {}
	return typeof a < typeof b ? -1 : 1;
};

/**
 * 两个对象指定特定的属性进行比较的比较函数
 */
var compare = function(propertyName) {
	return function(obj1, obj2) {
		var a, b;
		if ((obj1 && typeof obj1 === 'object') && (obj2 && typeof obj2 === 'object')) {
			a = obj1[propertyName], b = obj2[propertyName];
			if (a === b) {
				return 0;
			} else {}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			} else {}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'ERROR',
				message: 'Excepted an object when sorting by ' + propertyName
			};
		}
	};
};