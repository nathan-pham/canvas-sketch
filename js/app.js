import createSketch from "./lib/createSketch.js"

import {background} from "./objects/background.js"
import {grid} from "./objects/grid.js"

const settings = {
    dimensions: [2048, 2048], 
    container: "#canvas__container"
}

const sketch = createSketch(() => {
    const objects = []

    objects.push(background({color: "#fff"}))
    objects.push(grid())

    // render loop
    return (props) => {
        for(const renderer of objects) {
            renderer(props)
        }
    }
}, settings)