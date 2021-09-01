import { getElements } from '../src/getItems';
import { Layer } from '../src/types/layer.type';
import { HEIGHT, WIDTH } from './config';

export const layers: Layer[] = [
    {
        location: 'layers/background/',
        elements: getElements('layers/background'),
        position: { x: 0, y: 0 },
        size: { width: WIDTH, height: HEIGHT },
    },
    {
        location: 'layers/body/',
        elements: getElements('layers/body'),
        position: { x: 0, y: 0 },
        size: { width: WIDTH, height: HEIGHT },
    },
    {
        location: 'layers/hair/',
        elements: getElements('layers/hair'),
        position: { x: 0, y: 0 },
        size: { width: WIDTH, height: HEIGHT },
    },
    {
        location: 'layers/eyes/',
        elements: getElements('layers/eyes'),
        position: { x: 0, y: 0 },
        size: { width: WIDTH, height: HEIGHT },
    },
    {
        location: 'layers/bread/',
        elements: getElements('layers/bread'),
        position: { x: 0, y: 0 },
        size: { width: WIDTH, height: HEIGHT },
    },
    {
        location: 'layers/clothes/',
        elements: getElements('layers/clothes'),
        position: { x: 0, y: 0 },
        size: { width: WIDTH, height: HEIGHT },
    },
];
