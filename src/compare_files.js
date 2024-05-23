import _ from 'lodash';

const getUniqueKeys = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const uniqueKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(uniqueKeys);

  return sortedKeys;
};

const compareFiles = (data1, data2) => {
  const keys = getUniqueKeys(data1, data2);

  const result = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      return `  - ${key}: ${value1}`;
    } if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      return `  + ${key}: ${value2}`;
    } if (value1 !== value2) {
      return `  - ${key}: ${value1}\n  + ${key}: ${value2}`;
    }
    return `    ${key}: ${value1}`;
  });
  const diffReport = `{\n${result.join('\n')}\n}`;
  return diffReport;
};

export default compareFiles;
