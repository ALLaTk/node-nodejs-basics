import fs from 'fs';
import promise from 'fs/promises';
const pathFile = './files'
const pathFileCopy = './files_copy';

export const copy = async (pathFile, pathFileCopy) => {

  try {
  
    await promise.mkdir(pathFileCopy);
  
    fs.readdir(pathFileCopy, (err, data) => {
      if (err) throw err;
      for (let elem of data) {
        fs.access(`./${pathFile}/${elem}`, (err) => {
          if (err) {
            fs.rm(`./${pathFileCopy}/${elem}`, (err) => {
              if (err) throw err;
            });
          }
        });
      }
    });
  
    let data = await promise.readdir(pathFile, { withFileTypes: true })
     
    for (let el of data) {
      if (el.isFile()) {
        fs.copyFile(`./${pathFile}/${el.name}`, `./${pathFileCopy}/${el.name}`, (err) => {
          if (err) throw err;
        });
      }
      else if (el.isDirectory()) {
        copy(`./${pathFile}/${el.name}`, `./${pathFileCopy}/${el.name}`);
      }
    }
  
  } catch(err){
      console.error(new Error('FS operation failed'));
  }
}

await copy(pathFile, pathFileCopy);
