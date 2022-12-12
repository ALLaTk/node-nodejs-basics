import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const file = fileURLToPath(import.meta.url)
const dir = dirname(file)

const create = async () => {
  try {
    await fs.writeFile(dir + '/files/fresh.txt', 'I am fresh and young', { flag: 'wx'})
  } catch (error) {
    console.error(new Error('FS operation failed'))
  }
};

await create();