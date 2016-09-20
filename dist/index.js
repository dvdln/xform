'use strict';

var _parsers = require('./parsers');

var parsers = _interopRequireWildcard(_parsers);

var _transform = require('./transform');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var xform = Object.assign(_transform.createTransformer, parsers, {
  transform: _transform.transform
});

module.exports = xform;
//# sourceMappingURL=index.js.map