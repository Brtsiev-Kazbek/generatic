import { Element } from '../layers/config';
import fs from 'fs';
const rarity = [
    { key: '_n', val: 'original' },
    { key: '_r', val: 'rare' },
    { key: '_sr', val: 'super rare' },
];

function addRarity(_str: string): string {
    let itemRarity: string = 'original';
    rarity.forEach((el) => {
        if (_str.includes(el.key)) {
            itemRarity = el.val;
        }
    });
    return itemRarity;
}

function cleanName(_str: string): string {
    let name = _str.slice(0, -4);
    rarity.forEach((el) => {
        name = name.replace(el.key, '');
    });
    return name;
}

export function getElements(path: string): Element[] {
    const dirFiles = fs.readdirSync(path);
    const filenames = dirFiles.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));
    const elements: Element[] = filenames.map((el, index) => ({
        id: index,
        name: cleanName(el),
        fileName: el,
        rarity: addRarity(el),
    }));

    return elements;
}
