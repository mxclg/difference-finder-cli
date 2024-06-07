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
test.each(files)('diff report in "stylish" format', (file1, file2) => {
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);
  const result = readFile('stylishDiffReport.txt');
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(result);
});

test.each(files)('diff report in "plain" format', (file1, file2) => {
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);
  const result = readFile('plainDiffReport.txt');
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(result);
});

test.each(files)('diff report in "json" format', (file1, file2) => {
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);
  const result = readFile('jsonDiffReport.txt');
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(result);
});
