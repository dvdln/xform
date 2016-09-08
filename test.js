import test from 'ava';
import xform from './index';

test('Transform works', t => {
  const example = xform({
    value: xform.value('x'),
    defaultValue: xform.value('b'),
    exclude: xform.exclude({
      deep: {
        value: xform.memo('deepValue')
      }
    }),
    shallow: xform.memoValue('deepValue')
  });

  const transformed = example({
    value: 'a',
    exclude: {
      deep: {
        value: 'c'
      }
    }
  });

  t.deepEqual(transformed, {
    value: 'a',
    defaultValue: 'b',
    shallow: 'c'
  });
});
