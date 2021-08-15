import * as THREE from "https://esm.sh/three"

import {insertStyle} from "./style.js"

const create3DSketch = (sketch, OPTIONS) => {
    const {dimensions, container, three, name} = OPTIONS
    const [width, height] = dimensions

    // select container & append canvas
    const _container = typeof container == "string" ? document.querySelector(container) : container
    const scene = new THREE.Scene()



    Object.assign(canvas, {width, height, id: name, tabIndex: 0})
    insertStyle({container: _container, canvas})

    return {}
}

export default create3DSketch