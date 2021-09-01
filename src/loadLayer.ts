import { loadImage } from 'canvas';

export function loadLayerImg(_layer: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const image = await loadImage(`${_layer.location}${_layer.selectedElement.fileName}`);
        resolve({ layer: _layer, loadedImage: image });
    });
}
