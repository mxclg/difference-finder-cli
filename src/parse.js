import yaml from 'js-yaml';

const parsingData = (data, extension) => {
  switch (extension) {
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported format: ${extension}`);
  }
};

export default parsingData;
