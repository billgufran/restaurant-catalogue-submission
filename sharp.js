const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(path.resolve(__dirname, `${target}/${image.replace('-original.', '-desktop.')}`));

    sharp(`${target}/${image}`)
      .rotate(90)
      .resize(480)
      .toFile(path.resolve(__dirname, `${target}/${image.replace('-original.', '-mobile.')}`));
  });
