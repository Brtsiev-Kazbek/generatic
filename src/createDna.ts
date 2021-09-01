import { Layer } from './types/layer.type';

export function createDna(_layers: Layer[]) {
    let randNum: any[] = [];
    _layers.forEach((layer) => {
        let num = Math.floor(Math.random() * layer.elements.length);
        randNum.push(num);
    });
    return randNum;
}
