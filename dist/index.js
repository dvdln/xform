'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parsers = require('./parsers');

var parsers = _interopRequireWildcard(_parsers);

var _xform = require('./xform');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Object.assign(_xform.createTransformer, parsers, {
  createTransformer: _xform.createTransformer,
  transform: _xform.transform
});
//# sourceMappingURL=index.js.map