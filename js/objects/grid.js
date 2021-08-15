import SimplexNoise from "https://esm.sh/simplex-noise"

import {pick, shuffle, gaussian} from "../lib/random.js"
import {palettes} from "../lib/palettes.js"
import {lerp} from "../lib/math.js"

import {text} from "./text.js"

const simplex = new SimplexNoise()

const create = (size) => {
    const points = []

    for(let x = 0; x < size; x++) {
        for(let y = 0; y < size; y++) {
            const u = size <= 1 ? 0.5 : (x / (size - 1))
            const v = size <= 1 ? 0.5 : (y / (size - 1))
            points.push([u, v])
        }
    }

    return points
}


export const grid = () => {
    const margin = 200
    const size = 30

    const palette = shuffle(pick(palettes)) //.slice(0, 3)

    console.log(simplex.noise2D(0, 1))

    // create uv grid
    const points = create(size)
        .filter(() => Math.random() > 0.5)
        .map(([u, v]) => ({
            color: pick(palette),
            size: Math.abs(simplex.noise2D(u, v)),
            position: [u, v]
        }))


    return ({ctx, dimensions: [width, height]}) => {
        for(const point of points) {
            const {position: [u, v], color, size} = point

            const x = lerp(margin, width - margin, u)
            const y = lerp(margin, height - margin, v)

            const renderText = text({x, y, color, size: size * width * 0.1})
            renderText({ctx})
        }
    }
}