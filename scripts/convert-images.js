import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceDir = 'img/artworks';
const outputDir = 'img/converted';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all JPEG files
const files = fs.readdirSync(sourceDir)
    .filter(file => file.match(/\.(jpg|jpeg)$/i));

// Convert each file
files.forEach((file, index) => {
    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(outputDir, `${index + 1}.webp`);

    sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`Converted ${file} to ${index + 1}.webp`))
        .catch(err => console.error(`Error converting ${file}:`, err));
}); 