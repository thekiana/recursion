// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if (obj === null) {
		return '' + obj;
	} else if (typeof obj === 'number') {
		return '' + obj;
	} else if (typeof obj === 'boolean') {
		return '' + obj;
	} else if (typeof obj === 'string') {
		return '"' + obj + '"';
	}

	if (Array.isArray(obj)) {
		var arr = [];
		if (obj.length === 0) {
			return '[]';
		}

		for (var i = 0; i < obj.length; i++) {
			var ele = obj[i];
			arr.push(stringifyJSON(ele));
		}

		return '[' + arr + ']';
	}

	if (typeof obj === 'object') {
		var tempArr = [];

		if (Object.keys(obj).length === 0) {
			return '{}';
		}
		//
		for (var key in obj) {

			if (obj[key] === undefined) {
				return '{}';
			}

			var stringKey = stringifyJSON(key);
			var stringValue = stringifyJSON(obj[key]);
			var stringified = stringKey + ':' + stringValue;
			tempArr.push(stringified);
		}

		return '{' + tempArr + '}';
	}
};