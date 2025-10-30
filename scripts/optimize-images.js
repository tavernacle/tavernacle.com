const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImages() {
  // Optimize logo.png with aggressive compression
  console.log('Optimizing logo.png...');
  await sharp(path.join(publicDir, 'logo.png'))
    .webp({ quality: 60, effort: 6 })
    .toFile(path.join(publicDir, 'logo.webp'));
  
  const logoStats = fs.statSync(path.join(publicDir, 'logo.png'));
  const logoWebpStats = fs.statSync(path.join(publicDir, 'logo.webp'));
  console.log(`logo.png: ${(logoStats.size / 1024).toFixed(1)}KB -> logo.webp: ${(logoWebpStats.size / 1024).toFixed(1)}KB`);
  console.log(`Savings: ${((1 - logoWebpStats.size / logoStats.size) * 100).toFixed(1)}%`);

  // Optimize tavernacle-stage.jpg with lower quality (it's blurred anyway)
  console.log('\nOptimizing tavernacle-stage.jpg...');
  await sharp(path.join(publicDir, 'tavernacle-stage.jpg'))
    .webp({ quality: 50, effort: 6 })
    .toFile(path.join(publicDir, 'tavernacle-stage.webp'));
  
  const stageStats = fs.statSync(path.join(publicDir, 'tavernacle-stage.jpg'));
  const stageWebpStats = fs.statSync(path.join(publicDir, 'tavernacle-stage.webp'));
  console.log(`tavernacle-stage.jpg: ${(stageStats.size / 1024).toFixed(1)}KB -> tavernacle-stage.webp: ${(stageWebpStats.size / 1024).toFixed(1)}KB`);
  console.log(`Savings: ${((1 - stageWebpStats.size / stageStats.size) * 100).toFixed(1)}%`);

  console.log('\nImage optimization complete!');
}

optimizeImages().catch(console.error);
