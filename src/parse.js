const parseJson = (jsonFile) => JSON.parse(jsonFile);

const file = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
};

const parsedFile = parseJson(file);

console.log(parsedFile.proxy);

export default parseJson;
