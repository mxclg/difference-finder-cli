#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const options = program.opts().format;
    const diffReport = genDiff(filepath1, filepath2, options);
    console.log(diffReport);
  });

program.parse(process.argv);

// gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json
