import fs from 'fs';
import path from 'path';
import parsingData from './parse.js';
import compareFiles from './compareFiles.js';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const getFileType = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2) => {
  const getAbsolutePathFile1 = getFilePath(filepath1);
  const getAbsolutePathFile2 = getFilePath(filepath2);

  const readFile1 = readFile(getAbsolutePathFile1);
  const readFile2 = readFile(getAbsolutePathFile2);

  const extension1 = getFileType(filepath1);
  const extension2 = getFileType(filepath2);

  const getDataFile1 = parsingData(readFile1, extension1);
  const getDataFile2 = parsingData(readFile2, extension2);

  const diffReport = compareFiles(getDataFile1, getDataFile2);

  return diffReport;
};

// console.log(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml'));
export default genDiff;
