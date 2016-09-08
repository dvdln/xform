'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.path = exports.exclude = exports.memoValue = exports.memo = exports.value = undefined;

var _jsonpath = require('jsonpath');

var _jsonpath2 = _interopRequireDefault(_jsonpath);

var _xform = require('./xform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var value = exports.value = function value(defaultValue) {
  return function (src, dest, key) {
    dest[key] = typeof src === 'undefined' ? defaultValue : src;
  };
};

var memo = exports.memo = function memo(name) {
  return function (src, dest, key, data) {
    data.set('memo.' + name, src);
  };
};

var memoValue = exports.memoValue = function memoValue(name, defaultValue) {
  var dataKey = 'memo.' + name;

  return function (src, dest, key, data) {
    dest[key] = data.has(dataKey) ? data.get(dataKey) : defaultValue;
  };
};

var exclude = exports.exclude = function exclude(tpl) {
  return function (src, dest, key, data) {
    (0, _xform.transform)(tpl, src, data);
  };
};

var path = exports.path = function path(pathExpression) {
  return function (src, dest, key) {
    dest[key] = _jsonpath2.default.value(src, pathExpression);
  };
};
//# sourceMappingURL=parsers.js.map