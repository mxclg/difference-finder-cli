import fs from 'fs';
import path from 'path';
import parse from './parse.js';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileType = (filepath) => path.extname(filepath).slice(1);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const dataParse = (filepath) => parse(filepath);

const genDiff = (filepath1, filepath2) => {};

export default genDiff;

