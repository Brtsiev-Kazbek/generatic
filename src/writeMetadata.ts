import fs from 'fs';
import { metadataList } from '..';

export function writeMetaData() {
    fs.readFile('./output/metadata.json', (err, data) => {
        if (err) fs.writeFileSync('metadata.json', '');
    });
    fs.writeFileSync('./output/metadata.json', JSON.stringify(metadataList));
}
