// Add your functions here
function map(array, fn) {
    let results = [];
    for (let i=0; i < array.length; i++) {
        let result = array[i]
        results.push(fn(result));
    }
    return results;
}

function reduce(array, fn, start=0) {
    let result;
    let i = 0; 
    if (start) { 
        result = start;
    } else {
        result = array[0];
        i++;
    }
    for (i; i < array.length; i++) {
        result = fn(array[i], result)
    }
    return result;
}

// function reduceToAllTrue(sourceArray) {
//     for (let i=0; i < sourceArray.length; i++) {
//         if (sourceArray[i] === false) { return false;}
//     }
//     return true;
// }

// function reduceToTotal(sourceArray, startingPoint=0) {
//     let total = startingPoint;
//     for (let i=0; i < sourceArray.length; i++) {
//         total = total + sourceArray[i];
//     }
//     return total;
// }