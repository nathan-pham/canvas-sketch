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

const createCamera = ({ width, height, isometric }) => {
    let camera
    
    if(isometric) {
        const aspect = width / height
        const zoom = 1

        camera = new THREE.OrthographicCamera()

        camera.left = -zoom * aspect
        camera.right = zoom * aspect
        camera.top = zoom
        camera.bottom = -zoom

        camera.near = -100
        camera.far = 100

        camera.position.set(zoom, zoom, zoom)
        camera.lookAt(new THREE.Vector3(0, 0, 0))
    } else {
        camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000)
        camera.position.set(4, 2, 2)
        camera.lookAt(new THREE.Vector3(0, 0, 0))
    }

    return camera
}

const create3DSketch = (sketch, OPTIONS) => {
    const { dimensions, container, name } = OPTIONS
    const [ width, height ] = dimensions

    // select container & append canvas
    const _container = typeof container == "string" ? document.querySelector(container) : container

    const scene = createScene()
    const camera = createCamera({ width, height, isometric: true })
    const renderer = createRenderer({ width, height })
    renderer.setClearColor("hsl(0, 0%, 95%)", 1)

    const canvas = renderer.domElement
    _container.appendChild(canvas)

    Object.assign(canvas, { id: name, tabIndex: 0 })
    insertStyle({ container: _container, canvas })

    let time = 0

    const props = { time, scene, camera, renderer, ...OPTIONS }    
    const animate = sketch(props)
    const renderFrame = () => {
        time += 0.01
        animate(props)
        window.requestAnimationFrame(renderFrame)
    }
    renderFrame()

    // add ctrl + s canvas shortcut
    utils.shortcuts(canvas, renderFrame)
}

export default create3DSketch