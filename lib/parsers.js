const {transform} = require('./xform');

const value = defaultValue => (src, dest, key) => {
  dest[key] = typeof src === 'undefined' ? defaultValue : src;
};

const memo = name => (src, dest, key, data) => {
  data.set(`memo.${name}`, src);
};

const memoValue = (name, defaultValue) => {
  let dataKey = `memo.${name}`;

  return (src, dest, key, data) => {
    dest[key] = data.has(dataKey) ? data.get(dataKey) : defaultValue;
  };
};

const exclude = tpl => (src, dest, key, data) => {
  transform(tpl, src, data);
};

module.exports = {
  value,
  memo,
  memoValue,
  exclude
};
