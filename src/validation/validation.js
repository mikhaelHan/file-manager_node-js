import Path from '../services/Path.js';
import fsp from 'fs/promises';
import path from 'path';

export const validationUserName = (arg) => {
  if (arg.length === 0 || !arg.join(' ').startsWith('--username=')) {
    throw new Error('invalid input');
  }

  return arg.join(' ').split('=').slice(-1).join('');
}

export const validationIsFolder = async (folder) => {
  try {
    await fsp.access(folder);
    return true;
  } catch {
    return false;
  }
}

export const validationIsFile = async (file) => {
  const __dirname = Path.getPath();
  try {
    const stats = await fsp.lstat(path.join(__dirname, file.trim()));
    return stats.isFile();
  } catch {
    return false;
  }
}