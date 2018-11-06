import {LineBasicMaterial, Line, Geometry, Vector3} from 'three';

export class BasicLine {
    constructor() {
        this._material = new LineBasicMaterial({ color: 0x0000ff });
        this._geometry = new Geometry();

        this._geometry.vertices.push(new Vector3(-500, 0, 0));
        this._geometry.vertices.push(new Vector3(-400, 40, 0));

        this._line = new Line(this._geometry, this._material);

        return this._line;
    }
}