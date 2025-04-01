import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas');

// 1 Cena

const scene = new THREE.Scene();
scene.background = new THREE.Color('pink');

// 2 Câmera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5;

// 3 Objeto

const geometry = new THREE.ExtrudeGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#yellow', emissive: 'blue' });
const extrude = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 'darkblue', emissive: '#lightblue' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;


scene.add(extrude);
scene.add(box);


// 4 Iluminação

const light = new THREE.DirectionalLight(0xFF0000, 100);
light.position.set(-1,1,1);
scene.add(light);

// 5 Renderização

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);



// 6 OrbitControls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.01;
controls.enableZoom = true;
controls.enablePan = true;

// 7 Animação

function animate() {
  requestAnimationFrame(animate);
  extrude.rotation.x += 0.001;
  extrude.rotation.y += 0.001;

  box.rotation.x += 0.0005;



  controls.update();
  renderer.render(scene, camera);
}

// 8 Redimensionamento da Janela

window.addEventListener('resize',() => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


animate();