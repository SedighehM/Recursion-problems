// Write a recursive function which accepts a string and returns a new string in reverse
function reverse(str) {
    if (str.length <= 1) return str
    return reverse(str.slice(1)) + str[0]
}