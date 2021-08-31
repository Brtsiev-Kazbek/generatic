import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import { layers, WIDTH, HEIGHT, Layer } from './layers/config';
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext('2d');
const edition = 50;

async function saveLayer(_canvas: any, _edition: number) {
    fs.writeFileSync(`./output/${_edition}.png`, _canvas.toBuffer('image/png'));
    console.log('saved');
}

async function drawLayer(_layer: Layer, _edition: any): Promise<void> {
    let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)];

    const webPath = `${_layer.location}${element.fileName}`;

    const image = await loadImage(webPath);
    ctx.drawImage(
        image,
        _layer.position.x,
        _layer.position.y,
        _layer.size.width,
        _layer.size.height,
    );
    console.log(
        `Created a {${_layer.name}} layer and choose element {${element.name}} with rarity count {${element.rarity}}`,
    );
    saveLayer(canvas, _edition);
}

// drawLayer();

for (let i = 0; i < edition; i++) {
    layers.forEach((layer) => {
        drawLayer(layer, i);
    });
}

// console.log(layers);
