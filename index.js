// Add your functions here

function map(array, funct) {
    const returnArry = []
    for (const el of array) {
        returnArry.push(funct(el))
    }
    return returnArry
}

function reduce(array, funct, startValue) {
    startValue = startValue || 0
    for (const el of array) {
        startValue = funct(el, startValue)
    }
    return startValue
}

sourceArray = [1, 2, true, "razmatazz"]

console.log(reduce(sourceArray, function(a, memo){ return !!a && !!memo}))
