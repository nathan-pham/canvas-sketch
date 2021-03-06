export const insertStyle = ({ container, canvas, fullscreen }) => {
    Object.assign(document.body.style, {
        padding: "0",
        margin: "0"
    })

    Object.assign(container.style, {
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center"
    })

    const aspect = canvas.width / canvas.height

    const widthHeight = fullscreen 
        ? ({ width: "100vw", height: "100vh" }) 
        : ({ width: `calc(80vmin * ${aspect})`, height: "80vmin" })

    Object.assign(canvas.style, {
        ...widthHeight,
        outline: "none",
        borderRadius: "0.75rem",
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.25)"
    })
}