// Write a function which accepts an object and returns an array of all the values in the object that have a typeof string
function collectStrings(obj) {
    var collectedStrings = []

    function gatherStrings(o) {
        for (var key in o) {
            if (typeof o[key] === 'string') {
                collectedStrings.push(o[key])
            } else if (typeof o[key] === 'object') { return gatherStrings(o[key]) }
        }
    }
    gatherStrings(obj)
    return collectedStrings
}

