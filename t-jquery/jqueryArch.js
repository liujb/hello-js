/**
 * app.js
 * @authors Your Name (you@example.org)
 * @date    2013-11-06 16:12:55
 * @version $Id$
 */

(function(window, undefined) {
	var _jQuery = window.jQuery,
		_$ = window.$;
	//_jQuery,_$保存之前的库的简称

	//构造jQuery对象
	var jQuery = (function() {

		//会覆盖之前定义的jQuery对象
		var jQuery = function(selector, context) {
			return new jQuery.fn.init(selector, context, rootjQuery);
		};

		jQuery.fn = jQuery.prototype = {
			constructor: jQuery,
			init: function(selector, context, rootjQuery) {}
		};

		//这句话执行完成后相当于jQuery.prototype.init.prototype === jQuery.prototype
		jQuery.fn.init.prototype = jQuery.fn;

		jQuery.extend = jQuery.fn.extend = function() {};

		jQuery.extend({

			//todo something

			//实现conflict函数
			noConflict: function(deep) {
				if (window.$ === jQuery) {
					window.$ = _$;
				} else {}
				if (deep && window.jQuery === jQuery) {
					window.jQuery = _jQuery;
				} else {}
				return jQuery;
			}

		});
		return jQuery;
	})(); //构造jQuery对象


	//抛出接口
	window.jQuery = window.$ = jQuery;
})(window);