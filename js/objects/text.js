export const text = ({letter="=", color="#000", size=100, x, y}) => {
    return ({ctx}) => {
        ctx.save()

        ctx.fillStyle = color
        ctx.font = `${size}px Helvetica`
        
        ctx.translate(x, y)
        ctx.rotate(0.25)
        ctx.fillText(letter, 0, 0)
    
        ctx.restore()
    }
}