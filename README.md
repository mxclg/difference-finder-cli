[![Actions Status](https://github.com/mxclg/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mxclg/frontend-project-46/actions)
![Node CI](https://github.com/mxclg/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/423b05ab8208d9ea52a6/maintainability)](https://codeclimate.com/github/mxclg/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/423b05ab8208d9ea52a6/test_coverage)](https://codeclimate.com/github/mxclg/frontend-project-46/test_coverage)
---
# Difference Finder
It's a program that determines the difference between two data structures. This is a common task for which there are numerous online services, for example, http://www.jsondiff.com/. This mechanism is used when outputting tests or tracking changes in configuration files.

**Utility Features:**
- Support for different input formats: YAML, JSON
- Output in plain text, stylish, and JSON format

### Требования
Установленный  [node.js](https://nodejs.org/en). Если он не установлен, используйте [инструкцию по установке](https://github.com/Hexlet/ru-instructions/blob/main/nodejs.md). Проверить версию node.js возможно командой `node -v`.

### How to use
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

### Demonstration

- diff report – [**flat JSON files**](https://asciinema.org/a/CkqSxg5FLT1sGb3jLAXv9Yu4b)
- diff report – [**flat YAML files**](https://asciinema.org/a/guv1xU8vxcDzaU8ajAck8wO0a)
- diff report – nested files in [**'stylish' format**](https://asciinema.org/a/w6yY2jhNlcDMAbwTyTl0P7I1H)
- diff report – two nested files in [**'plain' format**](https://asciinema.org/a/y3PhqJLa0ONkRY6bE8upSNClS)
- diff report – nested files in [**'json' format**](https://asciinema.org/a/SFMiKwJ9Ympv4uw1YXjOE1ikK)