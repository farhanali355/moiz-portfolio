import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)
  arrayOfFiles = arrayOfFiles || []
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file))
    }
  })
  return arrayOfFiles
}

async function processImages() {
  console.log('Starting recursive image compression...');
  try {
    const files = getAllFiles(PUBLIC_DIR);
    
    let originalSize = 0;
    let newSize = 0;
    
    for (const filePath of files) {
      if (filePath.match(/\.(png|jpg|jpeg)$/i)) {
        const stat = fs.statSync(filePath);
        originalSize += stat.size;
        
        const ext = path.extname(filePath);
        const newFilePath = filePath.replace(new RegExp(`${ext}$`), '.webp');
        
        let pipeline = sharp(filePath);
        // If it's a grid/card image, constrain it to 1200px width
        if (filePath.includes('img-') || filePath.includes('thumb')) {
          pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
        } else {
          pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
        }
        
        await pipeline
          .webp({ quality: 75 })
          .toFile(newFilePath);
          
        const newStat = fs.statSync(newFilePath);
        newSize += newStat.size;
        
        console.log(`Converted: ${path.basename(filePath)} | ${(stat.size/1024/1024).toFixed(2)}MB -> ${(newStat.size/1024/1024).toFixed(2)}MB`);
        
        // Delete original file
        fs.unlinkSync(filePath);
      }
    }
    
    console.log('\n--- Optimization Complete ---');
    console.log(`Original Size: ${(originalSize/1024/1024).toFixed(2)} MB`);
    console.log(`New Size: ${(newSize/1024/1024).toFixed(2)} MB`);
    console.log(`Saved: ${((originalSize - newSize)/1024/1024).toFixed(2)} MB!`);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

processImages();
