/**
 * @param {Object} template
 * @param {Object} source
 * @param {Map} data
 * @returns {Object}
 */
export function transform(template = {}, source = {}, data = new Map()) {
  let result = {};

  for (let key of Object.keys(template)) {
    let node = template[key];
    let value = source[key];

    let context = {
      template,
      source
    };

    if (typeof node === 'function') {
      node.call(context, value, result, key, data);
    } else {
      result[key] = transform(node, value, data);
    }
  }

  return result;
}

/**
 * @param {Object} template
 * @returns {Function}
 */
export function createTransformer(template) {
  return source => transform(template, source);
}
