import createSketch from "./createSketch.js"

import {background} from "./objects/background.js"
import {square} from "./objects/square.js"
import {circle} from "./objects/circle.js"

const settings = {
    dimensions: [2048, 2048], 
    container: "#canvas__container"
}

const sketch = createSketch(() => {
    const objects = []

    objects.push(background({color: "#fff"}))
    objects.push(circle())

    // render loop
    return (props) => {
        for(const renderObject of objects) {
            renderObject(props)
        }
    }
}, settings)