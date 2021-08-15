import {circle} from "./circle.js"
import {lerp} from "../lib/math.js"

export const grid = () => {
    const margin = 250
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

            const x = lerp(margin, width - margin, u)
            const y = lerp(margin, height - margin, v)
            
            const renderCircle = circle({x, y, radius: 75})
            renderCircle({ctx})
        }
    }
}