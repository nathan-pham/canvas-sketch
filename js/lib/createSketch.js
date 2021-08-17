import create2DSketch from "./sketch/create2DSketch.js"
import create3DSketch from "./sketch/create3DSketch.js"

import { DEFAULT_OPTIONS } from "./sketch/options.js"

// create new sketch
const createSketch = (sketch, options) => {
    const OPTIONS = Object.assign({}, DEFAULT_OPTIONS, options)

    if(OPTIONS.dimensions == "fullscreen") {
        OPTIONS.dimensions = [window.innerWidth, window.innerHeight, true]
    }

    // const {dimensions, container, three, name} = OPTIONS
    // const [width, height] = dimensions

    return OPTIONS.three
        ? create3DSketch(sketch, OPTIONS)
        : create2DSketch(sketch, OPTIONS)
}

export default createSketch