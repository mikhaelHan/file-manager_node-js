import { validationUserName } from '../validation/validation.js';

class PrintService {
  constructor () {
    const arg = process.argv.slice(2);
    this.name = validationUserName(arg);
  }

  hello() {
    console.log(`Welcome to the File Manager, ${this.name}!`);
  }

  bye() {
    console.log(`Thank you for using File Manager, ${this.name}, goodbye!`);
  }
}

export default PrintService;