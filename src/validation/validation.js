import fsp from 'fs/promises';

export const validationUserName = (arg) => {
  if (arg.length === 0 || !arg.join(' ').startsWith('--username=')) {
    throw new Error('invalid input');
  }

  return arg.join(' ').split('=').slice(-1).join('');
}

export const validationIsFile = async (folder) => {
  try {
    await fsp.access(folder);
    return true;
  } catch {
    return false;
  }
}