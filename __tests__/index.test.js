import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');

const files = [
  ['file1.json', 'file2.json'],
  ['file1.yaml', 'file2.yaml'],
  ['file1.yml', 'file2.yml'],
];
test.each(files)('compare files in "stylish" format', (file1, file2) => {
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);
  const result = readFile('stylishDiffReport.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(result);
});
