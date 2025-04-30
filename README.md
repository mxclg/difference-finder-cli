[![Actions Status](https://github.com/mxclg/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mxclg/frontend-project-46/actions)
![Node CI](https://github.com/mxclg/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/423b05ab8208d9ea52a6/maintainability)](https://codeclimate.com/github/mxclg/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/423b05ab8208d9ea52a6/test_coverage)](https://codeclimate.com/github/mxclg/frontend-project-46/test_coverage)
---
# Difference Finder

A CLI tool that finds differences between two configuration files or data structures. This is a common task for which there are numerous online services, such as [jsondiff.com](http://www.jsondiff.com/). Useful for testing, debugging, or tracking changes in config files.

**Utility Features:**

- Support for different input formats: YAML, JSON
- Output in `plain`, `stylish`, and `JSON` formats

### Requirements
You need to have [Node.js](https://nodejs.org/en) installed. If it's not installed, use the [installation guide](https://github.com/Hexlet/ru-instructions/blob/main/nodejs.md). To check your Node.js version, use the command `node -v`.

### Installation and Setup
 1. Clone the repository:
```
git clone https://github.com/mxclg/difference-finder-cli
```
2.	Navigate to the project directory
```
cd difference-finder-cli
```
3.	Install dependencies:
```
npm install
```
4.	Link the package locally:
```
npm link
```
### How to use

Run
```
gendiff [options] <filepath1> <filepath2>
```
Show help
```
gendiff -h
```
Example usage
```
gendiff --format plain file1.json file2.json
```
and you'll see =>
```
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           output usage information
```

### Examples

- diff report – [**flat JSON files**](https://asciinema.org/a/CkqSxg5FLT1sGb3jLAXv9Yu4b)
- diff report – [**flat YAML files**](https://asciinema.org/a/guv1xU8vxcDzaU8ajAck8wO0a)
- diff report – nested files in [**`stylish` format**](https://asciinema.org/a/w6yY2jhNlcDMAbwTyTl0P7I1H)
- diff report – two nested files in [**`plain` format**](https://asciinema.org/a/y3PhqJLa0ONkRY6bE8upSNClS)
- diff report – nested files in [**`json` format**](https://asciinema.org/a/SFMiKwJ9Ympv4uw1YXjOE1ikK)
