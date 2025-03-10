import * as alt from 'alt-client';
import game from 'natives';
import { Font } from '../enums/font';
import { AbstractText } from './abstractText';

export class Text2D extends AbstractText {
    position: [number, number];
    centre: boolean;

    constructor(text: string, position: [number, number], scale: number, font: Font, color: alt.RGBA, centre: boolean) {
        super(text, scale, font, color);
        this.position = position;
        this.centre = centre;
    }

    drawThisFrame() {
        game.setTextCentre(this.centre);
        game.setTextScale(0, this.scale);
        game.setTextColour(this.color.r, this.color.g, this.color.b, this.color.a);
        game.setTextFont(this.font);
        game.setTextOutline();
        game.beginTextCommandDisplayText('CELL_EMAIL_BCON');
        this.text.match(/.{1,99}/g).forEach((text) => game.addTextComponentSubstringPlayerName(text));
        game.endTextCommandDisplayText(this.position[0], this.position[1], 0);
    }
}
