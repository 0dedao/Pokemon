import * as THREE from 'three';

// Criar a cena
const scene = new THREE.Scene();
scene.background = new THREE.Color('pink');

// Adicionar a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000)
camera.position.z =5;

// Criar e adicionar um objeto cúbico
// Tipos geométricos que posso colocar a :
// BoxGeometry, SphereGeometry, CylinderGeometry, PlaneGeometry, TorusGeometry, TetrahedronGeometry,
// OctahedronGeometry, IcosahedronGeometry, PolyhedronGeometry, CircleGeometry, 
//RingGeometry, ShapeGeometry, ExtrudeGeometry, LatheGeometry, ParametricGeometry, TextGeometry
const material = new THREE.MeshNormalMaterial({color: '#468585', emissive: '#468585'});
const geometry = new THREE.ExtrudeGeometry();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Adicionar iluminação
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);




// Renderizar a cena
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animar a cena
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
