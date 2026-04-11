import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.match(/\.(png|jpg|jpeg)$/i)) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const run = async () => {
  const files = walkSync('./public/images');
  for (const file of files) {
    const out = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    try {
      await sharp(file).webp({ quality: 80 }).toFile(out);
      console.log(`Converted ${file} to .webp`);
      fs.unlinkSync(file); // remove original
    } catch (e) {
      console.error(`Failed ${file}:`, e.message);
    }
  }
};

run();
