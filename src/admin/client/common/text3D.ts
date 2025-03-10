import * as alt from 'alt-client';
import game from 'natives';
import { Font } from '../enums/font';
import { Game } from '../utils/game';
import { AbstractText } from './abstractText';

export class Text3D extends AbstractText {
    position: alt.IVector3;
    attachedTo: alt.IVector3;

    constructor(
        text: string,
        position: alt.IVector3,
        scale: number,
        font: Font,
        color: alt.RGBA,
        attachedTo: alt.IVector3
    ) {
        super(text, scale, font, color);
        this.position = position;
        this.attachedTo = attachedTo;
    }

    drawThisFrame() {
        if (this.attachedTo) this.position = this.attachedTo;
        let scale =
            (1 / Game.getDistanceBetweenCoords(game.getGameplayCamCoord() as alt.Vector3, this.position)) *
            20 *
            ((1 / game.getGameplayCamFov()) * 100);
        game.setTextCentre(true);
        game.setTextScale(0, this.scale * scale);
        game.setTextColour(this.color.r, this.color.g, this.color.b, this.color.a);
        game.setTextFont(this.font);
        game.setTextOutline();
        game.setDrawOrigin(this.position.x, this.position.y, this.position.z, 0);
        game.beginTextCommandDisplayText('CELL_EMAIL_BCON');
        this.text.match(/.{1,99}/g).forEach((text) => game.addTextComponentSubstringPlayerName(text));
        game.endTextCommandDisplayText(0, 0, 0);
        game.clearDrawOrigin();
    }
}
