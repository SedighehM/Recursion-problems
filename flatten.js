// Write a recursive function which accepts an array of arrays and returns a new array with all values flattened.
function flatten(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[0])) {
            newArray = newArray.concat(flatten(arr[i]))
        } else {
            newArray.push(arr[i])
        }
    }
    return newArray
}