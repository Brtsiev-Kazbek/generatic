import fs from 'fs';
import path from 'path';
import { getElements } from '../src/getItems';

export const WIDTH = 1000;
export const HEIGHT = 1000;

export type Element = {
    id: number;
    name: string;
    fileName: string;
    rarity: string;
};

type Coordinates = {
    x: number;
    y: number;
};

type Size = {
    width: number;
    height: number;
};

export interface Layer {
    id: number;
    name: string;
    location: string;
    elements: Element[] | [];
    position: Coordinates;
    size: Size;
}

export const layers: Layer[] = [
    {
        id: 0,
        name: 'background',
        location: 'layers/background/',
        elements: getElements('layers/background'),
        position: { x: 0, y: 0 },
        size: { width: 1000, height: 1000 },
    },
    {
        id: 1,
        name: 'ball',
        location: 'layers/ball/',
        elements: getElements('layers/ball'),
        position: { x: 0, y: 0 },
        size: { width: 1000, height: 1000 },
    },
    {
        id: 2,
        name: 'eyes',
        location: 'layers/eyes/',
        elements: getElements('layers/eyes/'),
        position: { x: 250, y: 300 },
        size: { width: 500, height: 150 },
    },
    {
        id: 3,
        name: 'smile',
        location: 'layers/smile/',
        elements: getElements('layers/smile/'),
        position: { x: 250, y: 600 },
        size: { width: 500, height: 150 },
    },
];
