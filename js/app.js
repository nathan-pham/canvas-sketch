import createSketch from "./createSketch.js"

import {background} from "./objects/background.js"
import {square} from "./objects/square.js"

const settings = {
    dimensions: [300, 300], 
    container: "#canvas__container"
}

const sketch = () => {
    const objects = []

    objects.push(background("#fff"))
    objects.push(square())

    // render loop
    return (props) => {
        const {ctx, dimensions: [width, height]} = props

        for(const renderObject of objects) {
            renderObject(props)
        }
    }
}


createSketch(sketch, settings)