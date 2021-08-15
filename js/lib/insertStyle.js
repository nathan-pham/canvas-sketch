const insertStyle = ({container, canvas}) => {
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

    Object.assign(canvas.style, {
        borderRadius: "0.75rem",
        width: canvas.width + "px",
        height: canvas.height + "px",
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.25)"
    })
}

export default insertStyle