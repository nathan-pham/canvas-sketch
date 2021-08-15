export const insertStyle = ({container, canvas}) => {
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

    Object.assign(canvas.style, {
        outline: "none",
        borderRadius: "0.75rem",
        width: `calc(80vmin * ${aspect})`,
        height: `80vmin`,
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.25)"
    })
}