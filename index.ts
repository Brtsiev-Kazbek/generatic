import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import { layers, WIDTH, HEIGHT, Layer } from './layers/config';
const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');
const editionSize = 1;

let metadataList: any[] = [];
let attributesList: any[] = [];
let dnaList: any[] = [];

async function saveImage(_edition: number) {
    fs.writeFileSync(`./output/${_edition}.png`, canvas.toBuffer('image/png'));
}

function signImg(_sig: string) {
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 30pt Courier';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.fillText(_sig, 40, 40);
}

function addMetadata(_dna: number[], _edition: number): void {
    let dateTime = Date.now();
    let tempMetadata = {
        dna: _dna.join(''),
        edition: _edition,
        date: dateTime,
        attributes: attributesList,
    };
    metadataList.push(tempMetadata);
    dnaList.push(_dna);
    attributesList = [];
}

function addAttributes(_element: any): void {
    let selectedElement = _element.selectedElement;
    attributesList.push({
        name: selectedElement.name,
        rarity: selectedElement.rarity,
    });
}

function loadLayerImg(_layer: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const image = await loadImage(`${_layer.location}${_layer.selectedElement.fileName}`);
        resolve({ layer: _layer, loadedImage: image });
    });
}

function drawElement(_element: any) {
    ctx.drawImage(
        _element.loadedImage,
        _element.layer.position.x,
        _element.layer.position.y,
        _element.layer.size.width,
        _element.layer.size.height,
    );
    addAttributes(_element.layer);
}

function constructLayerToDna(_dna: number[], _layers: Layer[]) {
    let mappedDnaToLayers = _layers.map((layer: Layer, index: number) => {
        let selectedElement = layer.elements[_dna[index]];
        return {
            location: layer.location,
            elements: layer.elements,
            position: layer.position,
            size: layer.size,
            selectedElement: selectedElement,
        };
    });
    return mappedDnaToLayers;
}

function isDnaUnique(_DnaList: any[], _dna: number[]): boolean {
    let foundDna = _DnaList.find((el) => el.join('') === _dna.join(''));
    return foundDna == undefined ? true : false;
}

function createDna(_layers: Layer[]) {
    let randNum: any[] = [];
    _layers.forEach((layer) => {
        let num = Math.floor(Math.random() * layer.elements.length);
        randNum.push(num);
    });
    return randNum;
}

function writeMetaData() {
    fs.writeFileSync('./output/metadata.json', JSON.stringify(metadataList));
}

async function startCreating(_edition: number): Promise<void> {
    let editionCount: number = 0;
    while (editionCount < _edition) {
        let newDna = createDna(layers);
        if (isDnaUnique(dnaList, newDna)) {
            let result = constructLayerToDna(newDna, layers);
            let loadedElements: any[] = [];

            result.forEach((layer) => {
                loadedElements.push(loadLayerImg(layer));
            });

            await Promise.all(loadedElements).then((elementArray) => {
                elementArray.forEach((el) => {
                    drawElement(el);
                });
                signImg(`#${editionCount}`);
                saveImage(editionCount);
                addMetadata(newDna, editionCount);
                console.log(metadataList);

                console.log(`Created edition: ${editionCount} with dna: ${newDna}`);
            });

            editionCount++;
        } else {
            console.log('DNA exists!');
        }
    }
    writeMetaData();
}

fs.readFile('./output/metadata.json', (err, data) => {
    if (err) throw err;
});

startCreating(47);
