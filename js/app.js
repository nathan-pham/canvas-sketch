import createSketch from "./lib/createSketch.js"

import useObjects from "./lib/hooks/useObjects.js"

import { background } from "./objects/2D/background.js"
import { grid } from "./objects/2D/grid.js"

const settings = {
    container: "#canvas__container",
    dimensions: "fullscreen", 
}

createSketch(() => {
    const [objects, pushObject] = useObjects()

    pushObject(background())
    pushObject(grid())

    return (props) => {
        for(const renderObject of objects) {
            renderObject(props)
        }
    }
}, settings)

