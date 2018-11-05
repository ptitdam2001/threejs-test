import {BoxGeometry, MeshBasicMaterial, Mesh} from 'three';

export class Cube {
    constructor() {
        const geometry = new BoxGeometry(1,1,1);
        const material = new MeshBasicMaterial({ color: 0x00ffee })
        this._cube = new Mesh(geometry, material);
        return this._cube;
    }
}