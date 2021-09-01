import { dnaList, metadataList } from '..';
import { Attribute } from './types/attribute.type';

export let attributesList: Attribute[] = [];

export function addMetadata(_dna: any[], _edition: number): void {
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
