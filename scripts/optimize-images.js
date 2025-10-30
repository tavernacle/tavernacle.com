const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

async function optimizeImages() {
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  // Optimize logo.png with aggressive compression
  console.log('Optimizing logo.png...');
  await sharp(path.join(publicDir, 'logo.png'))
    .webp({ quality: 60, effort: 6 })
    .toFile(path.join(publicDir, 'logo.webp'));
  
  const logoStats = fs.statSync(path.join(publicDir, 'logo.png'));
  const logoWebpStats = fs.statSync(path.join(publicDir, 'logo.webp'));
  console.log(`logo.png: ${(logoStats.size / 1024).toFixed(1)}KB -> logo.webp: ${(logoWebpStats.size / 1024).toFixed(1)}KB`);
  console.log(`Savings: ${((1 - logoWebpStats.size / logoStats.size) * 100).toFixed(1)}%`);
  totalOriginalSize += logoStats.size;
  totalOptimizedSize += logoWebpStats.size;

  // Optimize tavernacle-stage.jpg with lower quality (it's blurred anyway)
  console.log('\nOptimizing tavernacle-stage.jpg...');
  await sharp(path.join(publicDir, 'tavernacle-stage.jpg'))
    .webp({ quality: 50, effort: 6 })
    .toFile(path.join(publicDir, 'tavernacle-stage.webp'));
  
  const stageStats = fs.statSync(path.join(publicDir, 'tavernacle-stage.jpg'));
  const stageWebpStats = fs.statSync(path.join(publicDir, 'tavernacle-stage.webp'));
  console.log(`tavernacle-stage.jpg: ${(stageStats.size / 1024).toFixed(1)}KB -> tavernacle-stage.webp: ${(stageWebpStats.size / 1024).toFixed(1)}KB`);
  console.log(`Savings: ${((1 - stageWebpStats.size / stageStats.size) * 100).toFixed(1)}%`);
  totalOriginalSize += stageStats.size;
  totalOptimizedSize += stageWebpStats.size;

  // Optimize all venue images
  console.log('\nOptimizing venue images...');
  const venuesDir = path.join(publicDir, 'venues');
  const venues = ['patio', 'steyk-center', 'tavernacle'];
  
  for (const venue of venues) {
    const venueDir = path.join(venuesDir, venue);
    const files = fs.readdirSync(venueDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'));
    
    console.log(`\nProcessing ${venue}...`);
    for (const file of files) {
      const inputPath = path.join(venueDir, file);
      const outputPath = path.join(venueDir, file.replace(/\.(jpg|jpeg)$/, '.webp'));
      
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const originalStats = fs.statSync(inputPath);
      const webpStats = fs.statSync(outputPath);
      console.log(`  ${file}: ${(originalStats.size / 1024).toFixed(1)}KB -> ${file.replace(/\.(jpg|jpeg)$/, '.webp')}: ${(webpStats.size / 1024).toFixed(1)}KB (${((1 - webpStats.size / originalStats.size) * 100).toFixed(1)}% savings)`);
      
      totalOriginalSize += originalStats.size;
      totalOptimizedSize += webpStats.size;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('Image optimization complete!');
  console.log(`Total original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
  console.log(`Total optimized size: ${(totalOptimizedSize / 1024).toFixed(1)}KB`);
  console.log(`Total savings: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
}

optimizeImages().catch(console.error);
