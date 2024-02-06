import Path from '../services/Path.js'
import { validationIsFile, validationIsFolder } from '../validation/validation.js';
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { stdout } from 'process';
import { pipeline, finished } from 'stream/promises';


export const readFile = async (file) => {

  const __dirname = Path.getPath();
  const isFile = await validationIsFile(file);

  if (!isFile) return false;

  const stream = fs.createReadStream(path.join(__dirname, file), 'utf-8');
  stream.pipe(stdout);
  await finished(stream);

  return true;
}

export const addFile = async (file) => {

  const __dirname = Path.getPath();
  const isFile = await validationIsFile(file);

  if (isFile) return false;

  await fsp.writeFile(path.join(__dirname, file), '')

  return true;
}

export const renameFile = async (oldFile, newFile) => {

  const __dirname = Path.getPath();
  const isFile = await validationIsFile(oldFile);

  if (!isFile) return false;

  await fsp.rename(path.join(__dirname, oldFile), path.join(__dirname, newFile));

  return true;
}

export const copyFile = async (file, directory) => {

  const __dirname = Path.getPath();
  const isFile = await validationIsFile(file);
  const isDirectory = await validationIsFolder(directory)

  if (!isFile || !isDirectory) return false;

  const readStream = fs.createReadStream(path.join(__dirname, file));
  const writeStream = fs.createWriteStream(path.join(__dirname, directory, path.basename(file)));

  await pipeline(readStream, writeStream);

  return true;
}

export const removeFile = async (file) => {

  const __dirname = Path.getPath();
  const isFile = await validationIsFile(file);

  if (!isFile) return false;

  await fsp.unlink(path.join(__dirname, file));

  return true;
}

export const moveFile = async (file, directory) => {
  const isCopyFile = await copyFile(file, directory);

  if (!isCopyFile) return false;

  await removeFile(file);

  return true;
}