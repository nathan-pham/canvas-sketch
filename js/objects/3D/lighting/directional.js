import * as THREE from "https://esm.sh/three"

export const directional = () => {
    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, 0, 4)  // on top of world

    return () => light
}