import fs from 'fs';
import { canvas } from '..';

export async function saveImage(_edition: number) {
    fs.writeFileSync(`./output/${_edition}.png`, canvas.toBuffer('image/png'));
}
