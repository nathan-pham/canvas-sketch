import create2DSketch from "./sketch/create2DSketch.js"

import {DEFAULT_OPTIONS} from "./sketch/options.js"
import {insertStyle} from "./sketch/style.js"

// create new sketch
const createSketch = (sketch, options) => {
    const OPTIONS = Object.assign({}, DEFAULT_OPTIONS, options)
    const {dimensions, container, three, name} = OPTIONS
    const [width, height] = dimensions

    // only for 3D experiences
    if(three) {
        

        return {

        }
    } else {
        return create2DSketch(sketch, OPTIONS)
    }
}

export default createSketch