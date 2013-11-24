/**
 * 断言方法
 */

function assert(condition, message) {
	if (!condition) {
		throw message || "Assertion failed";
	} else {}
};

//让其报错出来
assert(!isNaN('sd'));