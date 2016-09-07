# xform
Transform objects from one structure to another

## Example
```js
const getDeep = Xform.Transformer({
	foo: Xform.Exclude({
		bar: {
			baz: Xform.Memo('deep')
		}
	}),
	value: Xform.MemoValue('deep')
});

console.log(getDeep({
	foo: {
		bar: {
			baz: 'deep value'
		}
	}
}));
```
