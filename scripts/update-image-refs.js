import fs from 'fs';
import path from 'path';

const htmlFile = 'index.html';
const htmlContent = fs.readFileSync(htmlFile, 'utf8');

// Replace all image references
let newContent = htmlContent.replace(
    /background-image:url\(img\/(\d+)\.webp\)/g,
    (match, number) => {
        // Keep using sequential numbers for the new images
        return `background-image:url(img/converted/${number}.webp)`;
    }
);

// Write the updated content back to the file
fs.writeFileSync(htmlFile, newContent);
console.log('Updated image references in index.html'); 