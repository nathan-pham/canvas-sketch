import createSketch from "./lib/createSketch.js"

import useObjects from "./lib/hooks/useObjects.js"
import { cube } from "./objects/3D/cube.js"

const settings = {
    container: "#canvas__container",
    dimensions: "fullscreen", 
    three: true
}

createSketch(({ scene }) => {
    const [ objects, pushObject ] = useObjects(scene)

    for(let i = 0; i < 40; i++) {
        pushObject(cube())
    }

    return ({ renderer, scene, camera }) => {
        for(const renderObject of objects) {
            renderObject()
        }

        renderer.render(scene, camera)
    }
}, settings)