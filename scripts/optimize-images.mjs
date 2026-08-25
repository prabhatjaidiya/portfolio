import sharp from 'sharp'
import fs from 'fs'

const images = [
    {
        input: './src/assets/bitmoji.png',
        output: './src/assets/bitmoji.webp',
        width: 800,
    },
    {
        input: './src/assets/projects/weather/desktop.png',
        output: './src/assets/projects/weather/desktop.webp',
        width: 1440,
    },
]

for (const image of images) {
    await sharp(image.input)
        .resize({
            width: image.width,
            withoutEnlargement: true,
        })
        .webp({
            quality: 85,
        })
        .toFile(image.output)

    const stats = fs.statSync(image.output)

    console.log(
        `${image.output}: ${(stats.size / 1024).toFixed(1)} KB`
    )
}

console.log('Image optimization complete.')