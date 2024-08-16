// Write a function which takes in an object and finds all of the values which are numbers and converts them to strings
function stringfyNumbers(obj) {
    var newObj = {}
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString()
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringfyNumbers(obj[key])
        } else { newObj[key] = obj[key] }
    }
    return newObj
}