export const background = (color="#fff") => {
    return ({ctx, dimensions: [width, height]}) => {
        ctx.fillStyle = color
        ctx.fillRect(0, 0, width, height)
    }
}