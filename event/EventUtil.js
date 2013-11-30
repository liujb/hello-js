var EventUtil = {

	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},

	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},

	getEvent: function(event) {
		return event ? event : window.event;
	},

	getTarget: function(argument) {
		return event.target || event.srcElement;
	},

	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},

	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	getRelatedTarget: function(event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.fromElement) {
			return event.fromElement;
		} else if (event.toElement) {
			return event.toElement;
		} else {
			return null;
		}
	},

	getButton: function(event) {
		if (document.implementation.hasFeature('MouseEvents', '2.0')) {
			return event.button;
		} else {
			switch (event.button) {
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},

	getCharCode: function(event) {
		if (typeof event.charCode === 'number') {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},

	getWheelDelta: function(event) {
		if (event.wheelDelta) {
			return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : wheelDelta);
		} else {
			return -event.detail * 40;
		}
	}


};