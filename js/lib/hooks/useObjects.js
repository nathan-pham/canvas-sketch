const useObjects = (scene) => {
    let objects = []

    const pushObject = (object) => {
        objects.push(object)

        if(scene) {
            scene.add(object())
        }
    }

    return [
        objects,
        pushObject
    ]
}

export default useObjects