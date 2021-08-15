![project banner](https://project-banner.phamn23.repl.co/?title=Canvas%20Sketch&description=Generative%20canvas%20art)

# Canvas Sketch
Generative canvas art

## 3D Sketch
```js
import createSketch from "./lib/createSketch.js"

import useObjects from "./lib/hooks/useObjects.js"
import {cube} from "./objects/3D/cube.js"

const settings = {
    container: "#canvas__container",
    dimensions: [2048, 2048], 
    three: true
}

const sketch = createSketch(({scene}) => {
    const [objects, pushObject] = useObjects(scene)

    pushObject(cube())

    return ({renderer, scene, camera}) => {
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