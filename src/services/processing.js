import { navigationUp, navigationDeep } from '../navigation/navigation.js';
import printList from '../print-list/printList.js';
import { readFile, addFile, renameFile, removeFile } from '../handling-files/handlingFiles.js';
import Path from './Path.js';

async function processing(line) {
  const args = line.split(' ');
  switch (args[0].trim()) {

    case 'up':
      navigationUp();
      console.log(`You are currently in ${Path.getPath()}`);
      break;

    case 'cd':
      const isFolder = await navigationDeep(args[1]);
      if (!isFolder) console.log(`Invalid input: there is no such directory "${args[1]}"...`);
      break;

    case 'ls':
      await printList();
      break;


    case 'cat':
      const isfileToRead = await readFile(args[1]);
      if (!isfileToRead) console.log(`Invalid input: there is no such file "${args[1]}"...`);
      break;

    case 'add':
      const isfileToAdd = await addFile(args[1]);
      if (!isfileToAdd) console.log(`Invalid input: such a file already exists "${args[1]}"...`);
      break;

      case 'rn':
      const isfileToRename = await renameFile(args[1], args[2]);
      if (!isfileToRename) console.log(`Invalid input: there is no such file "${args[1]}"...`);
      break;

      case 'rm':
      const isfileToRemove = await removeFile(args[1]);
      if (!isfileToRemove) console.log(`Invalid input: there is no such file "${args[1]}"...`);
      break;

    default:
      console.log(`Invalid input: there is no such command "${args[0]}"...`);
  }
}

export default processing;