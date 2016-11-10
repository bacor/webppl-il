var _ = require('underscore');

module.exports = {
	call: function(fn, args) {
		var _fn = fn;
		var x = _fn(2)
		return x
		return _fn(args);
	}
};
