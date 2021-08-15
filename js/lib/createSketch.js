// default sketch configuration
const DEFAULT_OPTIONS = {
    dimensions: [2048, 2048],
    container: document.body,
    name: "canvas-sketch"
}

// apply basic styles to center canvas
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

    const aspect = canvas.width / canvas.height

    Object.assign(canvas.style, {
        outline: "none",
        borderRadius: "0.75rem",
        width: `calc(80vmin * ${aspect})`,
        height: `80vmin`,
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.25)"
    })
}

// create new sketch
const createSketch = (sketch, options) => {
    const OPTIONS = Object.assign({}, DEFAULT_OPTIONS, options)
    const {dimensions, container, name} = OPTIONS
    const [width, height] = dimensions

    // select container & append canvas
    const _container = typeof container == "string" ? document.querySelector(container) : container
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    _container.appendChild(canvas)

    // style container & canvas
    Object.assign(canvas, {width, height, id: name, tabIndex: 0})
    insertStyle({container: _container, canvas})

    // create renderer
    const renderer = sketch()

    // begin rendering loop
    const renderFrame = () => {
        renderer({ctx, canvas, ...OPTIONS})
        window.requestAnimationFrame(renderFrame)
    }
    renderFrame()

    // download canvas image
    const download = () => {
        const image = canvas.toDataURL("image/png") 

        const anchor = document.createElement("a")
        anchor.download = `${name}.png`
        anchor.href = image
        anchor.click()

        anchor.remove()
    }

    // focus on canvas by default
    canvas.focus()

    // add ctrl + s canvas shortcut
    canvas.addEventListener("keydown", e => {
        if(e.ctrlKey) {
            if(e.key.toLowerCase() == "s") {
                e.preventDefault()
                download()
            }
        }
    })

    return {
        download,
        renderer
    }
}

export default createSketch