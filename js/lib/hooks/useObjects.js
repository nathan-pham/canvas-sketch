const useObjects = (scene) => {
    let objects = []

    const pushObject = (object) => {
        objects.push(object)

        if(scene) {
            scene.add(object())
        }
        console.log(objects)
    }

    return [
        objects,
        pushObject
    ]
}

export default useObjects