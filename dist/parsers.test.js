'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('Get value', function (t) {
  var example = (0, _index2.default)({
    noDefault: _index2.default.value(),
    unusedDefault: _index2.default.value('x'),
    usedDefault: _index2.default.value('c'),
    undefDefault: _index2.default.value()
  });

  var transformed = example({
    noDefault: 'a',
    unusedDefault: 'b'
  });

  t.deepEqual(transformed, {
    noDefault: 'a',
    unusedDefault: 'b',
    usedDefault: 'c',
    undefDefault: undefined
  });
});

(0, _ava2.default)('Memo and exclude', function (t) {
  var example = (0, _index2.default)({
    exclude: _index2.default.exclude({
      deep: {
        value: _index2.default.memo('deepValue')
      }
    }),
    shallow: _index2.default.memoValue('deepValue')
  });

  var transformed = example({
    exclude: {
      deep: {
        value: 'c'
      }
    }
  });

  t.deepEqual(transformed, {
    shallow: 'c'
  });
});

(0, _ava2.default)('JSONPath', function (t) {
  var example = (0, _index2.default)({
    root: _index2.default.path('$.deep.value')
  });

  var transformed = example({
    root: {
      deep: {
        value: 'a'
      }
    }
  });

  t.deepEqual(transformed, {
    root: 'a'
  });
});

(0, _ava2.default)('JSONPath subtemplates', function (t) {
  var example = (0, _index2.default)({
    root: _index2.default.path('$.deep.value', {
      sub: _index2.default.path('$.template')
    })
  });

  var transformed = example({
    root: {
      deep: {
        value: {
          sub: {
            template: 'a'
          }
        }
      }
    }
  });

  t.deepEqual(transformed, {
    root: {
      sub: 'a'
    }
  });
});
//# sourceMappingURL=parsers.test.js.map