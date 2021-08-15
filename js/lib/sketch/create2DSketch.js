import {insertStyle} from "./style.js"
import * as utils from "./utils.js"

// create 2D sketch
const create2DSketch = (sketch, OPTIONS) => {
    const {dimensions, container, three, name} = OPTIONS
    const [width, height] = dimensions

    // select container & append canvas
    const _container = typeof container == "string" ? document.querySelector(container) : container
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    _container.appendChild(canvas)

    // style container & canvas
    Object.assign(canvas, {width, height, id: name, tabIndex: 0})
    insertStyle({container: _container, canvas})

    // create & start renderer
    const props = {ctx, canvas, ...OPTIONS}
    const animate = sketch()
    const renderFrame = () => {
        animate(props)
        window.requestAnimationFrame(renderFrame)
    }
    renderFrame()

    // add ctrl + s canvas shortcut
    utils.shortcuts(canvas)

    return {
        download: () => utils.download(canvas),
        renderer
    }
}

export default create2DSketch