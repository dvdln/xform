'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = transform;
exports.createTransformer = createTransformer;
/**
 * @param {Object} template
 * @param {Object} source
 * @param {Map} data
 * @returns {Object}
 */
function transform() {
  var template = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var source = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var data = arguments.length <= 2 || arguments[2] === undefined ? new Map() : arguments[2];

  var result = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(template)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var node = template[key];
      var value = source[key];

      var context = {
        template: template,
        source: source
      };

      if (typeof node === 'function') {
        node.call(context, value, result, key, data);
      } else {
        result[key] = transform(node, value, data);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

/**
 * @param {Object} template
 * @returns {Function}
 */
function createTransformer(template) {
  return function (source) {
    return transform(template, source);
  };
}
//# sourceMappingURL=transform.js.map