export const background = ({color="#fff", transparent}={}) => {
    return ({ctx, dimensions: [width, height]}) => {
        if(transparent) {
            ctx.clearRect(0, 0, width, height)
        } else {
            ctx.fillStyle = color
            ctx.fillRect(0, 0, width, height)
        }
    }
}