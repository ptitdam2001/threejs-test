import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

export class Sphere {
    constructor() {
        this.geometry = new SphereGeometry( 5, 32, 32 );
        this.material = new MeshBasicMaterial( {color: 0xffff00} );
        this.sphere = new Mesh( this.geometry, this.material );

        return this.sphere;
    }
}