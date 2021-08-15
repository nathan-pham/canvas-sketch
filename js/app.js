import createSketch from "./createSketch.js"

import {background} from "./objects/background.js"
import {square} from "./objects/square.js"
import {circle} from "./objects/circle.js"

const settings = {
    dimensions: [300, 300], 
    container: "#canvas__container"
}

const sketch = () => {
    const objects = []

    objects.push(background({color: "#fff"}))
    objects.push(circle())

    // render loop
    return (props) => {
        for(const renderObject of objects) {
            renderObject(props)
        }
    }
}


createSketch(sketch, settings)