import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrl = 'https://ik.imagekit.io/barthraj/barathrajcoat.jpg';
const outputPath = path.resolve(__dirname, '../public/images/profile.jpg');

console.log('Downloading image...');

try {
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Ensure the directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, buffer);
    console.log('Image downloaded successfully!');
} catch (error) {
    console.error('Error downloading image:', error.message);
} 