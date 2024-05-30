import yaml from 'js-yaml';

const parsingData = (data, extension) => {
  let result;
  if (extension === 'yaml' || extension === 'yml') {
    result = yaml.load(data);
  } else if (extension === 'json') {
    result = JSON.parse(data);
  } else {
    throw new Error(`Unsupported format: ${extension}`);
  }
  return result;
};

export default parsingData;
