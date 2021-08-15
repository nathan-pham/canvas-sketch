export const download = (canvas) => {
    const image = canvas.toDataURL("image/png") 

    const anchor = document.createElement("a")
    anchor.download = `${name}.png`
    anchor.href = image
    anchor.click()

    anchor.remove()
}