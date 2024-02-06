import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { pipeline } from 'stream/promises';
import Path from '../services/Path.js';
import { validationIsFile } from '../validation/validation.js';


export const compressFile = async (file, newFile, boolean) => {
  const isFile = await validationIsFile(file);

  if (!isFile) return false;

  const __dirname = Path.getPath();
  const readStream = fs.createReadStream(path.join(__dirname, file));
  const writeStream = fs.createWriteStream(path.join(__dirname, newFile));
  const cod = boolean ? zlib.createBrotliCompress() : zlib.createBrotliDecompress();

  try {
    await pipeline(
      readStream,
      cod,
      writeStream
    );
  } catch (err) {
    console.error(err.message);
  }
  return true;
};
