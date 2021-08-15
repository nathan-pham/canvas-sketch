import createSketch from "./lib/createSketch.js"

import useObjects from "./lib/hooks/useObjects.js"
import { cube } from "./objects/3D/cube.js"

const settings = {
    container: "#canvas__container",
    dimensions: [2048, 2048], 
    three: true
}

createSketch(({ scene }) => {
    const [ objects, pushObject ] = useObjects(scene)

    pushObject(cube())

    return ({ renderer, scene, camera }) => {
        for(const renderObject of objects) {
            renderObject()
        }

        renderer.render(scene, camera)
    }
}, settings)