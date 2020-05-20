// Add your functions here

function map(array, funct) {
    const returnArry = []
    for (const el of array) {
        returnArry.push(funct(el))
    }
    return returnArry
}

function reduce(array, funct, startValue) {
    let iValue

    if (startValue === undefined) {
        iValue = 1
    } else {
        iValue = 0}

    startValue = startValue || array[0]

    for (let i = iValue; i<array.length; i++) {
        startValue = funct(array[i], startValue)
    }
    return startValue
}

