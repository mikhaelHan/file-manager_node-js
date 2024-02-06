# Assignment: File Manager
https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md

## Description
File Manager using Node.js APIs

## How to use
The program is started by npm-script `start` in following way:
```bash
npm run start -- --username=your_username
```

## Commands

### Navigation & working directory (nwd)
- up
- cd src/data
- ls

### Basic operations with files
- cat src/data/test.md
- add test2.md
- rn src/data/test.md newTest.md
- cp src/data/test.md src/hash
- mv src/data/test.md src/hash
- rm srcdata/test.md

### Operating system info
- os --EOL
- os --cpus
- os --homedir
- os --username
- os --architecture

### Hash calculation
- hash src/data/test.md
- compress src/data/test.md src/data/testZip.br
- decompress src/data/testZip.br src/data/testDif.md
