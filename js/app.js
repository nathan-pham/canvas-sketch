import createSketch from "./lib/createSketch.js"

import useObjects from "./lib/hooks/useObjects.js"

import { directional } from "./objects/3D/lighting/directional.js"
import { ambient } from "./objects/3D/lighting/ambient.js"
import { cube } from "./objects/3D/cube.js"

import { palettes } from "/js/lib/palettes.js"
import { pick } from "/js/lib/random.js"

const settings = {
    container: "#canvas__container",
    dimensions: "fullscreen", 
    three: true
}

createSketch(({ scene }) => {
    const [ objects, pushObject ] = useObjects(scene)
    const palette = pick(palettes).slice(0, 4)

    for(let i = 0; i < 40; i++) {
        pushObject(cube({ palette }))
    }

    pushObject(directional())
    pushObject(ambient())

    return ({ renderer, scene, camera }) => {
        for(const renderObject of objects) {
            renderObject()
        }

        renderer.render(scene, camera)
    }
}, settings)