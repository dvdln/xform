'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.path = exports.exclude = exports.memoValue = exports.memo = exports.value = undefined;

var _jsonpath = require('jsonpath');

var _jsonpath2 = _interopRequireDefault(_jsonpath);

var _xform = require('./xform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} [defaultValue]
 */
var value = exports.value = function value(defaultValue) {
  return function (src, dest, key) {
    dest[key] = typeof src === 'undefined' ? defaultValue : src;
  };
};

/**
 * @param {string} name
 */
var memo = exports.memo = function memo(name) {
  return function (src, dest, key, data) {
    data.set('memo.' + name, src);
  };
};

/**
 * @param {string} name
 * @param {*} [defaultValue]
 */
var memoValue = exports.memoValue = function memoValue(name, defaultValue) {
  var dataKey = 'memo.' + name;

  return function (src, dest, key, data) {
    dest[key] = data.has(dataKey) ? data.get(dataKey) : defaultValue;
  };
};

/**
 * @param {Object} template
 */
var exclude = exports.exclude = function exclude(template) {
  return function (src, dest, key, data) {
    (0, _xform.transform)(template, src, data);
  };
};

/**
 * @param {string} pathExpression
 * @param {Object} template
 */
var path = exports.path = function path(pathExpression, template) {
  return function (src, dest, key, data) {
    var value = _jsonpath2.default.value(src, pathExpression);
    dest[key] = template ? (0, _xform.transform)(template, value, data) : value;
  };
};
//# sourceMappingURL=parsers.js.map
