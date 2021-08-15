export const circle = () => {
    return ({ctx, dimensions: [width, height]}) => {
        ctx.fillStyle = "#000"
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, 100, 0, 2 * Math.PI)
        ctx.fill()
    }
}