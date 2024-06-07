import getPlain from './plain.js';
import getStylish from './stylish.js';

const choiseFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    case 'plain':
      return getPlain(data);
    default:
      throw new Error(`Unknown ${format}.`);
  }
};

export default choiseFormat;
