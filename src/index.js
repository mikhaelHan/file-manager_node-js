import PrintService from './services/print_service.js';
import processing from './services/processing.js';
import readline from 'readline/promises';
import Path from './services/Path.js';
const { cwd, stdin, stdout } = process;

try {
  Path.setPath(cwd())

  const printService = new PrintService();
  printService.hello();

  stdout.write(`You are currently in ${Path.getPath()}\n`);

  const readLine = readline.createInterface(stdin, stdout);

  readLine
    .on('line', async (line) => {
      if (line === '.exit') {
        printService.bye();
        process.exit();
      }
      await processing(line);
      stdout.write(`You are currently in ${Path.getPath()}\n`);
    })
    .on('SIGINT', () => {
      printService.bye();
      process.exit();
    })

} catch (err) {
  console.error(`Error: ${err.message}`);
}

