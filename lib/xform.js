const XFORM_NODE = Symbol();

function Transformer(tpl) {
  return obj => transform(tpl, obj);
}

function Parser(fn) {
  return (...args) => ({
    [XFORM_NODE]: true,
    parse: fn(...args)
  });
}

function transform(tpl = {}, obj = {}, data = new Map()) {
  let result = {};

  for (let key of Object.keys(tpl)) {
    let node = tpl[key];
    let value = obj[key];

    if (node[XFORM_NODE]) {
      node.parse(value, result, key, data);
    } else if (typeof node === 'object') {
      result[key] = transform(node, value, data);
    }
  }

  return result;
}

module.exports = {
  Transformer,
  Parser,
  transform
};
