'use strict';

var _parsers = require('./parsers');

var parsers = _interopRequireWildcard(_parsers);

var _xform = require('./xform');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = Object.assign(_xform.createTransformer, parsers, {
  transform: _xform.transform
});
//# sourceMappingURL=index.js.map