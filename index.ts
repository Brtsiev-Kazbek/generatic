import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import { terminal } from 'terminal-kit';
import { WIDTH, HEIGHT } from './layers/config';
import { Metadata } from './src/types/metadata.type';
import { Attribute } from './src/types/attribute.type';
import { Layer } from './src/types/layer.type';
import { attributesList } from './src/addMetadata';
import { startCreating } from './src/startCreating';

export const canvas = createCanvas(WIDTH, HEIGHT);
export const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = false;

export let metadataList: Metadata[] = [];
export let dnaList: any[] = [];

terminal.clear();
terminal.windowTitle('Generatic by Kazbich123');
terminal.green('Введите количество генерируемых изображений: ');

terminal.inputField(function (error, input: any) {
    input = Number(input);
    startCreating(input);
    terminal.processExit(0);
});
