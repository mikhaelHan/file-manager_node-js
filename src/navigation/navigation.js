const { cwd, chdir } = process;
import path from 'path';
import Path from '../services/Path.js';
import { validationIsFile } from '../validation/validation.js';


export const navigationUp = () => {
  chdir('..');
  Path.setPath(cwd());
}

export const navigationDeep = async (directory) => {
  const isFolder = await validationIsFile(directory);

  if (!isFolder) return false;

  chdir(path.resolve(directory));
  Path.setPath(cwd());

  return true;
}
