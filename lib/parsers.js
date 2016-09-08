import jsonpath from 'jsonpath';
import {transform} from './xform';

export const value = defaultValue => (src, dest, key) => {
  dest[key] = typeof src === 'undefined' ? defaultValue : src;
};

export const memo = name => (src, dest, key, data) => {
  data.set(`memo.${name}`, src);
};

export const memoValue = (name, defaultValue) => {
  let dataKey = `memo.${name}`;

  return (src, dest, key, data) => {
    dest[key] = data.has(dataKey) ? data.get(dataKey) : defaultValue;
  };
};

export const exclude = tpl => (src, dest, key, data) => {
  transform(tpl, src, data);
};

export const path = pathExpression => (src, dest, key) => {
  dest[key] = jsonpath.value(src, pathExpression);
};
