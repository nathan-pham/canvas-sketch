import * as THREE from "https://esm.sh/three"

export const ambient = () => {
    const light = new THREE.AmbientLight("hsl(0, 0%, 25%)")
    return () => light
}