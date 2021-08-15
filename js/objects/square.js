export const square = () => {
    let x = 0

    return ({ctx}) => {
        x += 1

        ctx.fillStyle = "red"
        ctx.fillRect(x, 0, 100, 100)
    }
}