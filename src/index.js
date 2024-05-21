import makeAbsolutePath from "../path.js";
import fs from 'fs';

const genDiff = (filepath1, filepath2) => {
  const firstFilePath = makeAbsolutePath(filepath1);
  const secondFilePath = makeAbsolutePath(filepath2);

  const readFirstFile = fs.readFileSync(firstFilePath, 'utf-8');
  const readSecondFile = fs.readFileSync(secondFilePath, 'utf-8');
};

export default genDiff;
