import yaml from 'js-yaml';

const parsingData = (data, extension) => {
  if (extension === 'yaml' || extension === 'yml') {
    return yaml.load(data);
  }
  if (extension === 'json') {
    return JSON.parse(data);
  }
  throw new Error(`Unsupported format: ${extension}`);
};

export default parsingData;
