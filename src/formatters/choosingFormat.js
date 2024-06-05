import getStylish from './stylish.js';

const choiseFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    default:
      throw new Error(`Unknown ${format}.`);
  }
};

export default choiseFormat;
