import SimplexNoise from "https://esm.sh/simplex-noise"

import {circle} from "./circle.js"
import {palettes} from "../lib/palettes.js"
import {lerp, pick, gaussian} from "../lib/math.js"

const simplex = new SimplexNoise()

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
    const size = 30

    const palette = pick(palettes).slice(0, 3)

    // create uv grid
    const points = create(size)
        .filter(() => Math.random() > 0.5)
        .map(([u, v]) => ({
            color: pick(palette),
            radius: gaussian() * gaussian() * gaussian(),
            position: [u, v]
        }))


    return ({ctx, dimensions: [width, height]}) => {
        for(const point of points) {
            const {position: [u, v], color, radius} = point

            const x = lerp(margin, width - margin, u)
            const y = lerp(margin, height - margin, v)
            
            const renderCircle = circle({
                x, y, 
                color,
                radius: (Math.abs(radius) * width * 0.09)
            })
            renderCircle({ctx})
        }
    }
}