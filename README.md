![project banner](https://project-banner.phamn23.repl.co/?title=Canvas%20Sketch&description=Generative%20canvas%20art)

# Canvas Sketch
Generative canvas art

## 3D Sketch
```js
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
```

## 2D Sketch
```js
import createSketch from "./lib/createSketch.js"

import {background} from "./objects/2D/background.js"
import {grid} from "./objects/2D/grid.js"

const settings = {
    container: "#canvas__container",
    dimensions: [2048, 2048], 
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
```