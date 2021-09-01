import { attributesList } from './addMetadata';

export function addAttributes(_element: any): void {
    let selectedElement = _element.selectedElement;
    attributesList.push({
        name: selectedElement.name,
        rarity: selectedElement.rarity,
    });
}
