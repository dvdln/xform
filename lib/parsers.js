import jsonpath from 'jsonpath';
import {transform} from './xform';

/**
 * @param {*} [defaultValue]
 */
export const value = defaultValue => (src, dest, key) => {
  dest[key] = typeof src === 'undefined' ? defaultValue : src;
};

/**
 * @param {string} name
 */
export const memo = name => (src, dest, key, data) => {
  data.set(`memo.${name}`, src);
};

/**
 * @param {string} name
 * @param {*} [defaultValue]
 */
export const memoValue = (name, defaultValue) => {
  let dataKey = `memo.${name}`;

  return (src, dest, key, data) => {
    dest[key] = data.has(dataKey) ? data.get(dataKey) : defaultValue;
  };
};

/**
 * @param {Object} template
 */
export const exclude = template => (src, dest, key, data) => {
  transform(template, src, data);
};

/**
 * @param {string} pathExpression
 * @param {Object} template
 */
export const path = (pathExpression, template) => (src, dest, key, data) => {
  let value = jsonpath.value(src, pathExpression);
  dest[key] = template ? transform(template, value, data) : value;
};
