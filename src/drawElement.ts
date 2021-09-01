import { ctx } from '..';
import { addAttributes } from './addAttributes';

export function drawElement(_element: any) {
    ctx.drawImage(
        _element.loadedImage,
        _element.layer.position.x,
        _element.layer.position.y,
        _element.layer.size.width,
        _element.layer.size.height,
    );
    addAttributes(_element.layer);
}
