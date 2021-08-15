export const download = (canvas, renderFrame) => {
    renderFrame()

    const image = canvas.toDataURL("image/png") 

    const anchor = document.createElement("a")
    anchor.download = `${canvas.id}.png`
    anchor.href = image
    anchor.click()

    anchor.remove()
}

export const shortcuts = (canvas, renderFrame=()=>{}) => {
    canvas.focus()
    canvas.addEventListener("keydown", e => {
        if(e.ctrlKey && e.key.toLowerCase() == "s") {
            e.preventDefault()
            download(canvas, renderFrame)
        }
    })
}