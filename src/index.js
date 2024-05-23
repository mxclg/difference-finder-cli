import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import compareFiles from './compare_files.js';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getFileType = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2) => {
  const getAbsolutePathFile1 = getFilePath(filepath1);
  const getAbsolutePathFile2 = getFilePath(filepath2);

  const readFile1 = readFile(getAbsolutePathFile1);
  const readFile2 = readFile(getAbsolutePathFile2);

  const getDataFile1 = parse(readFile1);
  const getDataFile2 = parse(readFile2);

  const diffReport = compareFiles(getDataFile1, getDataFile2);

  return diffReport;
};

export default genDiff;
