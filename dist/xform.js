'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = transform;
exports.createTransformer = createTransformer;
function transform() {
  var template = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var object = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var data = arguments.length <= 2 || arguments[2] === undefined ? new Map() : arguments[2];

  var result = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(template)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var node = template[key];
      var value = object[key];

      var context = {
        template: template,
        object: object
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

function createTransformer(tpl) {
  return function (obj) {
    return transform(tpl, obj);
  };
}
//# sourceMappingURL=xform.js.map