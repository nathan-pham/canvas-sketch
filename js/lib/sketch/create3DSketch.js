import * as THREE from "https://esm.sh/three"

import { insertStyle } from "./style.js"
import * as utils from "./utils.js"

const createRenderer = ({ shadows=false, width, height }={}) => {
    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})

    if(shadows) {
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
    }

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    return renderer
    // this.container.appendChild(this.renderer.domElement)
}

const createScene = () => (
    new THREE.Scene()
)

const createCamera = ({ width, height }) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
    camera.position.z = 3
    return camera
}

const create3DSketch = (sketch, OPTIONS) => {
    const { dimensions, container, name } = OPTIONS
    const [ width, height ] = dimensions

    // select container & append canvas
    const _container = typeof container == "string" ? document.querySelector(container) : container

    const scene = createScene()
    const camera = createCamera({ width, height })
    const renderer = createRenderer({ width, height })
    renderer.setClearColor(0xffffff, 1)

    const canvas = renderer.domElement
    _container.appendChild(canvas)

    Object.assign(canvas, { id: name, tabIndex: 0 })
    insertStyle({ container: _container, canvas })

    const props = { scene, camera, renderer, ...OPTIONS }    
    const animate = sketch(props)
    const renderFrame = () => {
        animate(props)
        window.requestAnimationFrame(renderFrame)
    }
    renderFrame()

    // add ctrl + s canvas shortcut
    utils.shortcuts(canvas, renderFrame)
}

export default create3DSketch