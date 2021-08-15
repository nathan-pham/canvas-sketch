import {circle} from "./circle.js"
import {lerp} from "../lib/math.js"

const create = (size) => {
    const points = []

    for(let x = 0; x < size; x++) {
        for(let y = 0; y < size; y++) {
            const u = x / (size - 1)
            const v = y / (size - 1)
            points.push([u, v])
        }
    }

    return points
}


export const grid = () => {
    const margin = 200
    const size = 50

    // create uv grid
    const points = create(size).filter(() => Math.random() > 0.5)

    return ({ctx, dimensions: [width, height]}) => {
        for(const point of points) {
            const [u, v] = point

            const x = lerp(margin, width - margin, u)
            const y = lerp(margin, height - margin, v)
            
            const renderCircle = circle({x, y, radius: 10})
            renderCircle({ctx})
        }
    }
}