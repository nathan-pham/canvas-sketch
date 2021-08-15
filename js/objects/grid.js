import {circle} from "./circle.js"

export const grid = () => {
    const points = []
    const size = 5

    // create uv grid
    for(let x = 0; x < size; x++) {
        for(let y = 0; y < size; y++) {
            const u = x / (size - 1)
            const v = y / (size - 1)
            points.push([u, v])
        }
    }

    return ({ctx, dimensions: [width, height]}) => {
        for(const point of points) {
            const [u, v] = point
            
            const renderCircle = circle({x: width * u, y: height * v, radius: 50})
            renderCircle({ctx})
        }
    }
}