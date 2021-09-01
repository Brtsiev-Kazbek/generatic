import { Attribute } from './attribute.type';

export type Metadata = {
    dna?: string;
    edition?: number;
    date?: number;
    attributes?: Attribute[];
};
