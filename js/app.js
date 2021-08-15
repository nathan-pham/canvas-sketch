import createSketch from "./lib/createSketch.js"

import {background} from "./objects/background.js"
import {grid} from "./objects/grid.js"

const settings = {
    container: "#canvas__container",
    dimensions: [2048, 2048], 
    three: true
}

const sketch = createSketch(() => {
    // const objects = []

    // objects.push(background({color: "#fff"}))
    // objects.push(grid())

    // // render loop
    return (props) => {

    }
}, settings)