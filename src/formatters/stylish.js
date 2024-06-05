import _ from 'lodash';

const getIdentation = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - 2);
const getBrackeIndentation = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - spacesCount);

const stringify = (data, depth = 1) => {
  const iter = (currentData, currentDepth) => {
    if (!_.isPlainObject(currentData)) {
      return `${currentData}`;
    }

    const currentIndentation = getIdentation(currentDepth);
    const bracketIndentation = getBrackeIndentation(currentDepth);
    const currentValue = Object.entries(currentData);

    const strings = currentValue.map(([key, value]) => `${currentIndentation}  ${key}: ${iter(value, currentDepth + 1)}`);

    return ['{', ...strings, `${bracketIndentation}}`].join('\n');
  };

  return iter(data, depth);
};

const getStylish = (tree) => {
  const iter = (currentValue, depth = 1) => {
    const currentIndentation = getIdentation(depth);
    const bracketIndentation = getBrackeIndentation(depth);
    const strings = currentValue.flatMap((node) => {
      const {
        type, key, children, value, value1, value2,
      } = node;
      switch (type) {
        case 'nested':
          return `${currentIndentation}  ${key}: ${iter(children, depth + 1)}`;
        case 'removed':
          return `${currentIndentation}- ${key}: ${stringify(value, depth + 1)}`;
        case 'added':
          return `${currentIndentation}+ ${key}: ${stringify(value, depth + 1)}`;
        case 'unchanged':
          return `${currentIndentation}  ${key}: ${stringify(value, depth + 1)}`;
        case 'changed':
          return [
            `${currentIndentation}- ${key}: ${stringify(value1, depth + 1)}`,
            `${currentIndentation}+ ${key}: ${stringify(value2, depth + 1)}`,
          ];
        default:
          throw new Error(`Unknown type ${type}.`);
      }
    });
    return ['{', ...strings, `${bracketIndentation}}`].join('\n');
  };
  return iter(tree);
};

export default getStylish;
