import Path from '../services/Path.js'
import fsp from 'fs/promises';
import path from 'path';

const printList = async () => {
  const __dirname = Path.getPath();
  const files = await fsp.readdir(Path.getPath());

  const directoryArray = [];
  const fileArray = [];

  for (const file of files) {
    const stats = await fsp.lstat(path.join(__dirname, file));

    stats.isDirectory()
      ? directoryArray.push({ Name: file, Type: 'Directory' })
      : fileArray.push({ Name: file, Type: 'File' })
  }

  const table = [...directoryArray.sort((a, b) => a.Name - b.Name), ...fileArray.sort((a, b) => a.Name - b.Name)]

  console.table(table);
}

export default printList;