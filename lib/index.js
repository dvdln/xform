import * as parsers from './parsers';
import {transform, createTransformer} from './transform';

const xform = Object.assign(createTransformer, parsers, {
  transform
});

module.exports = xform;
