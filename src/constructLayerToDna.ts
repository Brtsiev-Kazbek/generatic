import { Layer } from './types/layer.type';

export function constructLayerToDna(_dna: number[], _layers: Layer[]) {
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
