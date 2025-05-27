import favicons from 'favicons';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = "https://ik.imagekit.io/barthraj/barathrajcoat.jpg?updatedAt=1748329958725"; // Source image
const configuration = {
    path: "/", // Path for generated files
    appName: "Barathraj S Portfolio",
    appShortName: "Barathraj S",
    appDescription: "Software Engineer | Full Stack Developer",
    background: "#fff",
    theme_color: "#14b8a6",
    icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        favicons: true,
        windows: false,
        yandex: false,
    },
};

const outputDir = path.resolve(__dirname, '../public');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Generating favicons...');

try {
    const response = await fetch(source);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const { images, files } = await favicons(buffer, configuration);
    
    images.forEach(({ name, contents }) => {
        fs.writeFileSync(path.join(outputDir, name), contents);
    });
    files.forEach(({ name, contents }) => {
        fs.writeFileSync(path.join(outputDir, name), contents);
    });
    console.log('Favicons generated successfully!');
} catch (error) {
    console.log('Error generating favicons:', error.message);
} 