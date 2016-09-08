function createTransformer(tpl) {
  return obj => transform(tpl, obj);
}

function transform(template = {}, object = {}, data = new Map()) {
  let result = {};

  for (let key of Object.keys(template)) {
    let node = template[key];
    let value = object[key];

    let context = {
      template,
      object
    };

    if (typeof node === 'function') {
      node.call(context, value, result, key, data);
    } else {
      result[key] = transform(node, value, data);
    }
  }

  return result;
}

module.exports = Object.assign(createTransformer, {
  createTransformer,
  transform
});
