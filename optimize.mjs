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
  console.log('Starting Robust Image Downscaling...');
  try {
    const files = getAllFiles(PUBLIC_DIR);
    
    let originalSize = 0;
    let newSize = 0;
    
    for (const filePath of files) {
      if (filePath.match(/\.(png|jpg|jpeg|webp)$/i)) {
        const stat = fs.statSync(filePath);
        originalSize += stat.size;
        
        const filename = path.basename(filePath);
        const relativePath = path.relative(PUBLIC_DIR, filePath);
        
        // Target settings
        let targetWidth = 1920;
        if (relativePath.includes('row-images') || filename.includes('img-') || filename.includes('result')) {
          targetWidth = 600; 
        } else if (relativePath.includes('section-4-images') || relativePath.includes('trusted-by-images')) {
          targetWidth = 200;
        } else if (filename.includes('avatar') || filename.includes('thumb')) {
          targetWidth = 120;
        }

        // Read into buffer to release file handle immediately
        const buffer = fs.readFileSync(filePath);
        const newFileName = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '.webp');
        const finalPath = path.join(path.dirname(filePath), newFileName);

        await sharp(buffer)
          .resize({ width: targetWidth, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(finalPath + '.tmp');

        // Swap files
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        if (fs.existsSync(finalPath) && finalPath !== filePath) {
          fs.unlinkSync(finalPath);
        }
        fs.renameSync(finalPath + '.tmp', finalPath);

        const newStat = fs.statSync(finalPath);
        newSize += newStat.size;
        console.log(`Optimized: ${filename} -> ${Math.round(newStat.size/1024)}KB`);
      }
    }
    
    console.log(`\nSuccess! Saved ${((originalSize - newSize)/1024/1024).toFixed(2)} MB more.`);
  } catch (error) {
    console.error('Processing failed:', error);
  }
}

processImages();
