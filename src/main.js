import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Canvas
const canvas = document.querySelector('canvas.webgl')
console.log(canvas)

//Scene
const scene = new THREE.Scene();

//Geometry 
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 ); 

//Material
const material = new THREE.MeshBasicMaterial();

//Mesh 
const torusKnot = new THREE.Mesh(geometry, material); 
torusKnot.scale.set(0.2, 0.2, 0.2);

scene.add(torusKnot);

//camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    30
    )

 camera.position.z = 5   
 camera.aspect

 //render
const renderer = new THREE.WebGLRenderer({
    canvas : canvas,
})

//render size and pixel
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

 //orbit controls 
 const controls = new OrbitControls( camera, canvas );
 controls.enableDamping = true
 controls.autoRotate = true
 controls.update();
 

//resize
window.addEventListener('resize', () =>
{
    // Update camera
    camera.aspect = window.innerWidth /window.innerHeight
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    console.log(window.innerWidth /window.innerHeight)
})



//Update Render each time
const renderLoop  = ()=>{
    controls.update()
    renderer.render(scene,camera);
    window.requestAnimationFrame(renderLoop)
    

}

renderLoop()