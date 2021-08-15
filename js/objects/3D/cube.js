import * as THREE from "https://esm.sh/three"

export const cube = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

    const mesh = new THREE.Mesh(geometry, material)

    return () => {
        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01

        return mesh
    }
}