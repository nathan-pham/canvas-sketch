import {DEFAULT_OPTIONS} from "./constants.js"
import insertStyle from "./insertStyle.js"

// create new sketch
const createSketch = (sketch, options) => {
    const OPTIONS = Object.assign({}, DEFAULT_OPTIONS, options)
    const {dimensions, container, name} = OPTIONS
    const [width, height] = dimensions

    // select container & append canvas
    const _container = typeof container == "string" ? document.querySelector(container) : container
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    _container.appendChild(canvas)

    // style container & canvas
    Object.assign(canvas, {width, height, id: name})
    insertStyle({container: _container, canvas})

    // create renderer
    const renderer = sketch()

    // begin rendering loop
    const renderFrame = () => {
        renderer({ctx, canvas, ...OPTIONS})
        window.requestAnimationFrame(renderFrame)
    }
    renderFrame()
}

export default createSketch