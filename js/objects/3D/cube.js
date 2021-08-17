import * as THREE from "https://esm.sh/three"

import {range, pick} from "/js/lib/random.js"

export const cube = ({ palette }) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({color: pick(palette)})

    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.set(range(-1, 1), range(-1, 1), range(-1, 1))
    mesh.scale.set(range(-1, 1), range(-1, 1), range(-1, 1))
    mesh.scale.multiplyScalar(0.5)

    return () => {
        return mesh
    }
}