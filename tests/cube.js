import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { Cube } from './src/cube';
import { ThreeContainer} from './src/threeContainer';
import { BasicLine } from './src/line';

var scene = new Scene();
var camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const cube = new Cube();

const renderer = new ThreeContainer(scene, camera);

renderer.add(cube);

renderer.animate(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
});

document.body.appendChild( renderer.getRenderer().domElement );