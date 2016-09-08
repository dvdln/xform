import * as parsers from './parsers';
import {transform, createTransformer} from './xform';

module.exports = Object.assign(createTransformer, parsers, {
  transform
});
