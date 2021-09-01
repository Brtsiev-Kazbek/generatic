import { Coordinates } from './coordinates.type';
import { Size } from './size.types';
import { Element } from './element.type';

export type Layer = {
    location: string;
    elements: Element[];
    position: Coordinates;
    size: Size;
};
