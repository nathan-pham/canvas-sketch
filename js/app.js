import createSketch from "./lib/createSketch.js"

const settings = {
    dimensions: [300, 300], 
    container: "#canvas__container"
}

const sketch = () => {
    const objects = []

    // render loop
    return ({ctx, dimensions: [width, height]}) => {
        ctx.fillStyle = "red"
        ctx.fillRect(0, 0, width, height)
    }
}


createSketch(sketch, settings)