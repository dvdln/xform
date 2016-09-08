# xform
Transform objects from one structure to another

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
