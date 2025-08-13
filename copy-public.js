import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyPublicDir() {
  try {
    const sourceDir = path.join(__dirname, 'public');
    const destDir = path.join(__dirname, 'dist/public');
    
    console.log(`Copying from ${sourceDir} to ${destDir}`);
    
    // Ensure source directory exists
    if (!await fs.pathExists(sourceDir)) {
      console.error(`Source directory does not exist: ${sourceDir}`);
      process.exit(1);
    }
    
    // Ensure destination directory exists
    await fs.ensureDir(destDir);
    
    // Copy files from public to dist/public
    await fs.copy(sourceDir, destDir, {
      overwrite: true,
      preserveTimestamps: true,
    });
    
    console.log('Successfully copied public directory to dist/public');
    
    // List copied files for verification
    const files = await fs.readdir(destDir, { recursive: true });
    console.log('Copied files:', files);
  } catch (err) {
    console.error('Error copying public directory:', err);
    process.exit(1);
  }
}

copyPublicDir();
