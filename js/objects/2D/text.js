export const text = ({letter="=", color="#000", rotation=0, size=100, x, y}) => {
    return ({ctx}) => {
        ctx.save()

        ctx.fillStyle = color
        ctx.font = `${size}px Helvetica`
        
        ctx.translate(x, y)
        ctx.rotate(rotation)
        ctx.fillText(letter, 0, 0)
    
        ctx.restore()
    }
}