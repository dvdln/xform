const Xform = require('./xform');

const Value = Xform.Parser(defaultValue => (src, dest, key) => {
  dest[key] = typeof src === 'undefined' ? defaultValue : src;
});

const Memo = Xform.Parser(name => (src, dest, key, data) => {
  data.set(`memo.${name}`, src);
});

const MemoValue = Xform.Parser((name, defaultValue) => {
  let dataKey = `memo.${name}`;

  return (src, dest, key, data) => {
    dest[key] = data.has(dataKey) ? data.get(dataKey) : defaultValue;
  }
});

const Exclude = Xform.Parser(tpl => (src, dest, key, data) => {
  Xform.transform(tpl, src, data);
});

module.exports = {
  Value,
  Memo,
  MemoValue,
  Exclude
};
