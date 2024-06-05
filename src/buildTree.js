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
      return { type: 'removed', key, value: value1 };
    }
    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      return { type: 'added', key, value: value2 };
    }
    if (_.isEqual(value1, value2)) {
      return { type: 'unchanged', key, value: value1 };
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      return { type: 'nested', key, children: compareFiles(value1, value2) };
    }
    return {
      type: 'changed', key, value1, value2,
    };
  });
  return result;
};

export default compareFiles;
