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

export const resize = ({ renderer, container, camera, isometric: zoom }) => {
    window.addEventListener("resize", () => {
        const { width, height } = container.getBoundingClientRect()
        const aspect = width / height

        renderer.setSize(width, height)
        camera.aspect = aspect

        if(zoom) {
            camera.left = -zoom * aspect
            camera.right = zoom * aspect
            camera.top = zoom
            camera.bottom = -zoom
        }

        camera.updateProjectionMatrix()
    })
}