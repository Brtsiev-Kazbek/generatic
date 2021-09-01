import { ctx } from '..';

export function signImg(_sig: string) {
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 30pt Courier';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.fillText(_sig, 40, 40);
}
