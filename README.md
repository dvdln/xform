# xform
Transform objects from one structure to another

[![npm version](https://img.shields.io/npm/v/xform.svg)](https://www.npmjs.com/package/xform)

## Example
```js
var xform = require('xform');

var getDeep = xform({
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

## Installation
```sh
npm install xform --save
```

## Usage
Create an object parsing function by feeding a template object to `xform`:

```js
var parser = xform(template);
```

The template is a plain object that represents the object structure you're expecting to receive.
Values are pulled from the source object through node-parsing methods on the template:

```js
var template = {
  example: xform.value() // Copies value as-is
};
```

The resulting parser is a function that accepts a source object and returns a transformed object:

```js
var template = {
  example: xform.value()
};

const parser = xform(template);

const transformed = parser({
  example: 'value'
});
```


### Node Parsers
A node-parsing method is simply a function that receives four arguments: `value`, `result`, `key`, and `data`.
It's up to the node parser to set a value on the `result` object:

```js
function nodeParser(value, result, key) {
  result[key] = value;
}

var template = {
  example: nodeParser
};
```

The `data` argument is a `Map` that's shared by every parser.
Since it's shared, it's possible to clobber other parsers' data, so you should namespace your keys:

```js
data.set('myParser.' + key, value);
```

### Built-In Parsers
**xform.value(_[default]_)**  
Simply returns a value as-is.
If the source value is `undefined` then `default` is returned.

**xform.memo(_key_)**  
Saves a value for later retrieval.

**xform.memoValue(_key_)**  
Returns value previously saved by `memo`.

**xform.exclude(_template_)**  
Continues parsing `template` but does nothing with the result.
Really only useful if you're using something like `memo` in `template`.

**xform.path(_expression, [template]_)**  
Performs a JSONPath query and returns the first value.
Passing a second template will traverse the result.
