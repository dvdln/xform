# xform
Transform objects from one structure to another

[![npm version](https://badge.fury.io/js/xform.png)](https://badge.fury.io/js/xform)

## Example
```js
const getDeep = xform({
  foo: xform.exclude({
    bar: {
      baz: xform.memo('deep')
    }
  }),
  value: xform.memoValue('deep')
});

console.log(getDeep({
  foo: {
    bar: {
      baz: 'deep value'
    }
  }
}));

// { value: 'deep value' }
```
