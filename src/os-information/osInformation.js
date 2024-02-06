import { EOL, cpus, userInfo, arch } from 'os';

const printOsInformation = async (arg) => {
  switch (arg.trim()) {


    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;

    case '--cpus':
      const cpu = cpus().map(({ model, speed }) => {
        return { Model: model, Speed: (speed / 1000) + ' Ghz' }
      })
      console.table(cpu);
      break;

    case '--homedir':
      console.log(userInfo().homedir);
      break;

    case '--username':
      console.log(userInfo().username);
      break;

    case '--architecture':
      console.log(arch());
      break;


    default:
      console.log(`Invalid input: there is no such command "${arg}"...`);
  }
}

export default printOsInformation;