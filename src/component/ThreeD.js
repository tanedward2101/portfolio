
import { useEffect } from 'react';
import SceneInit from './lib/SceneInit';
import * as THREE from 'three';
import { Mesh } from 'three';
function ThreeD() {
    // Scene


    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
        const helper = new THREE.AxesHelper(5);
        test.scene.add(helper)
        const group1 = new THREE.Group();
        test.scene.add(group1);
        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )

        const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
        const boxMaterial = new THREE.MeshNormalMaterial();
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

        //boxMesh.position.set(3, 2, 4)

        group1.add(boxMesh);
        group1.add(cube1);
        const clock = new THREE.Clock()
        test.camera.position.set(100, 6, 9)
        // test.camera.lookAt(new THREE.Vector3(0, 0, 0))
        boxMesh.scale.set(1, 1, 1)

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            boxMesh.position.y += Math.cos(elapsedTime )/30
            boxMesh.position.x += Math.sin(elapsedTime )/30

            window.requestAnimationFrame(tick)
        }

        tick()

    }, []);


    return (
        <div>
            <canvas id="myThreeJsCanvas" />
        </div>)
}

export default ThreeD;