const getValue = (value) => {
  if (value === null) {
    return null;
  }
  if (typeof value === 'object') {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const getPlain = (data) => {
  const iter = (nodes, path) => {
    const result = nodes
      .filter((node) => node.type !== 'unchanged')
      .flatMap((node) => {
        const {
          type, key, children, value, value1, value2,
        } = node;
        const fullPath = (path === '') ? `${key}` : `${path}.${key}`;
        switch (type) {
          case 'nested':
            return iter(children, fullPath);
          case 'removed':
            return `Property '${fullPath}' was removed`;
          case 'added':
            return `Property '${fullPath}' was added with value: ${getValue(value)}`;
          case 'changed':
            return `Property '${fullPath}' was updated. From ${getValue(value1)} to ${getValue(value2)}`;
          default:
            throw new Error(`Unknown type ${type}.`);
        }
      });
    return result.join('\n');
  };
  return iter(data, '');
};

export default getPlain;
