var getElesByClassName = function(node, className) {
	if (node.getElementsByClassName) {
		console.log('支持');
		return node.getElementsByClassName(className);
	} else {
		console.log('不支持');
		var res = [];
		var eles = node.getElementsByTagName("*");
		for (var i = 0, len = eles.length; i < len; i++) {
			if (eles[i].getAttribute) {
				if (eles[i].getAttribute("className").indexOf(className) !== -1) {
					res.push(eles[i]);
				} else {}
			} else {}
		}
		return res;
	}
};