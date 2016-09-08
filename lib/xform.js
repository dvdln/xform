const XFORM_NODE = Symbol();

function createTransformer(tpl) {
  return obj => transform(tpl, obj);
}

function createParser(fn) {
  return (...args) => ({
    [XFORM_NODE]: true,
    parse: fn(...args)
  });
}

function transform(template = {}, object = {}, data = new Map()) {
  let result = {};

  for (let key of Object.keys(template)) {
    let node = template[key];
    let value = object[key];

    let context = {
      template,
      object,
      data
    };

    if (node[XFORM_NODE]) {
      node.parse.call(context, value, result, key, data);
    } else if (typeof node === 'object') {
      result[key] = transform(node, value, data);
    }
  }

  return result;
}

module.exports = Object.assign(createTransformer, {
  createTransformer,
  createParser,
  transform
});
