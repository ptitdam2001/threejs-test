import * as THREE  from 'three';
import OrbitControls from 'orbit-controls-es6';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 78, window.innerWidth / window.innerHeight, 0.1, 1200 );

const controls = new OrbitControls(camera);
controls.enableZoom = false;
controls.maxDistance = 1000;
controls.minDistance = 0;
// controls.autoRotate = true;
controls.rotateSpeed = 0.2;

camera.position.set(-1, 0, 0);
controls.update();

// sphere
const geometry = new THREE.SphereGeometry( 1200, 32, 32 );

// Texture
const texture = new THREE.TextureLoader().load('assets/cassis2.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = -1;

const material = new THREE.MeshBasicMaterial( {
    side: THREE.DoubleSide,
    map: texture
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

function animate () {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

animate();

window.addEventListener('resize', onResize);