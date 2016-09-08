import test from 'ava';
import xform from './index';

test('Get value', t => {
  const example = xform({
    noDefault: xform.value(),
    unusedDefault: xform.value('x'),
    usedDefault: xform.value('c'),
    undefDefault: xform.value()
  });

  const transformed = example({
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

test('Memo and exclude', t => {
  const example = xform({
    exclude: xform.exclude({
      deep: {
        value: xform.memo('deepValue')
      }
    }),
    shallow: xform.memoValue('deepValue')
  });

  const transformed = example({
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
