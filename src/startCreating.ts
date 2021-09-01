import { dnaList, metadataList } from '..';
import { layers } from '../layers/layers';
import { addMetadata } from './addMetadata';
import { constructLayerToDna } from './constructLayerToDna';
import { createDna } from './createDna';
import { drawElement } from './drawElement';
import { isDnaUnique } from './isDnaUnique';
import { loadLayerImg } from './loadLayer';
import { saveImage } from './saveImage';
import { signImg } from './signImg';
import { writeMetaData } from './writeMetadata';

export async function startCreating(_edition: number): Promise<void> {
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

                console.log(`Created edition: ${editionCount + 1} with dna: ${newDna}`);
            });

            editionCount++;
        } else {
            console.log('DNA exists!');
        }
    }
    writeMetaData();
}
