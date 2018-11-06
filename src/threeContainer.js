import { WebGLRenderer } from 'three';

export class ThreeContainer {
    constructor(scene, camera) {
        this._scene = scene;
        this._camera = camera;
        this._renderer = new WebGLRenderer();
        this._renderer.setSize( window.innerWidth, window.innerHeight );

        this._animationID = null;

    }

    add(object) {
        this._scene.add(object);
        // this._camera.position.z = 5;
    }

    animate( animations = () => {} ) {
        this._animationID = requestAnimationFrame( () => {
            animations();
            this._renderer.render( this._scene, this._camera );
            // Repeat
            this.animate(animations);
        });
	    this._renderer.render( this._scene, this._camera );
    }

    getDomRender() {
        return this._renderer.domElement;
    }
}