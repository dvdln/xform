import * as parsers from './parsers';
import {transform, createTransformer} from './xform';

export default Object.assign(createTransformer, parsers, {
  createTransformer,
  transform
});
