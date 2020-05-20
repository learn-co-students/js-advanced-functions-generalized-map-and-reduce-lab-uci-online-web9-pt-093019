// Add your functions here

function map(array, funct) {
    const returnArry = []
    for (const el of array) {
        returnArry.push(funct(el))
    }
    return returnArry
}

function reduce(array, funct, startValue) {
    let i = startValue === undefined ? 1 : 0

    startValue = startValue || array[0]

    for (i; i<array.length; i++) {
        startValue = funct(array[i], startValue)
    }
    return startValue
}

