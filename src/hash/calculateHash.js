import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { finished } from 'stream/promises';
import Path from '../services/Path.js';
import { validationIsFile } from '../validation/validation.js';

const calculateHash = async (file) => {

  const isFile = await validationIsFile(file);

  if (!isFile) return false;

  const __dirname = Path.getPath();
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream(path.join(__dirname, file));

  stream.on('data', (data) => hash.update(data));
  stream.on('end', () => {
    const result = hash.digest('hex');
    console.log(`Hash (SHA256) is: ${result}`);
  });
  stream.on('error', () => console.log('Calculates SHA256 hash operation failed'));

  await finished(stream);

  return true;
}

export default calculateHash;