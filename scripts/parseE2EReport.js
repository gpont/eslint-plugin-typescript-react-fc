/* eslint-disable no-console */
// TODO переписать на typescript
const readline = require('readline');

const RED_TERMINAL_COLOR = '\x1b[31m';
const GREEN_TERMINAL_COLOR = '\x1b[32m';
const RESET_TERMINAL_COLOR = '\x1b[0m';

const colorizeText = (color) => (text) => {
  const colorTag = color === 'red' ? RED_TERMINAL_COLOR : GREEN_TERMINAL_COLOR;

  return `${colorTag}${text}${RESET_TERMINAL_COLOR}`;
};

const colorizeRed = colorizeText('red');
const colorizeGreen = colorizeText('green');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const expectFiles = {
  'justFunction.ts': {
    fileCount: 1,
    errorCount: 0,
    warningCount: 0,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
  },
  'Test.ts': {
    fileCount: 1,
    errorCount: 0,
    warningCount: 1,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
  },
  'Test1.ts': {
    fileCount: 1,
    errorCount: 0,
    warningCount: 1,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
  },
  'Test2.ts': {
    fileCount: 1,
    errorCount: 0,
    warningCount: 0,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
  },
  'Test3.ts': {
    fileCount: 1,
    errorCount: 0,
    warningCount: 1,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
  }
};

let files = { ...expectFiles };

rl.on('line', (line) => {
  try {
    const report = JSON.parse(line);
    files = Object.entries(files).reduce(
      (acc, [fileName, fileData]) => {
        const regExp = new RegExp(fileName);
        const fileReport = report.find(({ filePath }) => regExp.test(filePath));

        if (fileReport) {
          acc[fileName] = {
            fileCount: fileData.fileCount - 1,
            errorCount: fileData.errorCount - fileReport.errorCount,
            warningCount: fileData.warningCount - fileReport.warningCount,
            fixableErrorCount: fileData.fixableErrorCount - fileReport.fixableErrorCount,
            fixableWarningCount: fileData.fixableWarningCount - fileReport.fixableWarningCount,
          };
        }

        return acc;
      },
      files
    );
  } catch (e) {
    if (
      e.message !== 'Unexpected end of JSON input' &&
      e.message !== 'Unexpected token > in JSON at position 0'
    ) {
      console.error(e);
    }
  }
});

rl.on('close', () => {
  const countFailed = Object
    .entries(files)
    .map(([fileName, fileData]) => {
      const isPassed = Object.values(fileData).reduce((acc, curr) => acc + curr, 0) === 0;

      if (isPassed) {
        console.log(colorizeGreen(` ✅ ${fileName}`));
      } else {
        console.log(colorizeRed(` ❌ ${fileName}`));
        Object.entries(fileData).forEach(([key, value]) => console.log(colorizeRed(`\t${key}: ${-value}`)));
      }

      return isPassed;
    })
    .reduce((acc, isPassed) => Number(!isPassed) + acc, 0);

  if (countFailed !== 0) {
    console.log(colorizeRed(`\nFailed tests: ${countFailed}\n`));

    process.exit(1);
  } else {
    console.log(colorizeGreen('\nAll tests passed!'));

    process.exit(0);
  }
});
