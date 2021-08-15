export const gaussian = (sample=6) => {
    let random = 0

    for(let i = 0; i < sample; i++) {
        random += Math.random()
    }
    return random / sample
}

export const pick = (array) => (
    array[Math.floor(Math.random() * array.length)]
)

export const shuffle = (_array) => {
    // shallow copy array
    const array = [..._array]
    let currentIndex = array.length
    
    while(currentIndex >= 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // swap indexes
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}