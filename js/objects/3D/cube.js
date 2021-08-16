import * as THREE from "https://esm.sh/three"

import {range} from "/js/lib/random.js"

export const cube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.set(range(-1, 1), range(-1, 1), range(-1, 1))
    mesh.scale.multiplyScalar(0.05)

    return () => {
        return mesh
    }
}