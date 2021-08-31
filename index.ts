import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import { layers, WIDTH, HEIGHT, Layer } from './layers/config';
const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');
const edition = 10;

let metadata: any[] = [];
let attributes: any[] = [];
let hash: any[] = [];
let decodedHash: any[] = [];

async function saveLayer(_canvas: any, _edition: number) {
    fs.writeFileSync(`./output/${_edition}.png`, _canvas.toBuffer('image/png'));
    console.log('saved');
}

function addMetadata(_edition: number): void {
    let dateTime = Date.now();
    let tempMetadata = {
        hash: hash.join(''),
        decodedHash: decodedHash,
        edition: _edition,
        date: dateTime,
        attributes: attributes,
    };
    metadata.push(tempMetadata);
    attributes = [];
    hash = [];
    decodedHash = [];
}

function addAttributes(_element: any, _layer: any): void {
    let tempAttr = {
        id: _element.id,
        layer: _layer.name,
        name: _element.name,
        rarity: _element.rarity,
    };

    attributes.push(tempAttr);
    hash.push(_layer.id);
    hash.push(_element.id);
    decodedHash.push({ [_layer.id]: _element.id });
}

async function drawLayer(_layer: Layer, _edition: any): Promise<void> {
    let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
    addAttributes(element, _layer);

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
    addMetadata(i);
}

// console.log(layers);
fs.readFile('./output/metadata.json', (err, data) => {
    // if (err) throw err;
    fs.writeFileSync('./output/metadata.json', JSON.stringify(metadata, null, '\t'));
});
