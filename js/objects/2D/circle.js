export const circle = ({x=0, y=0, radius=100, color="#000"}) => {
    return ({ctx}) => {
        
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI)

        ctx.fillStyle = color
        ctx.fill()

        // ctx.strokeStyle = "#000"
        // ctx.lineWidth = 15
        // ctx.stroke()
    }
}