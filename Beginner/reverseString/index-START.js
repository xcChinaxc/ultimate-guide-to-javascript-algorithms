/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// First Try
function reverseString(text) {
    return text.split("").reverse().join("")
}

// For Loop
function reverseString(text) {
    let result = ""
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
}

// Recursion Method
function reverseString(text){
    let result = ""
    for (let char of text){
        result = char + result
    }
    return result
}

// .reduce()
function reverseString(text){
    return text.split("").reduce( (acc, char) => char + acc, '')
}

module.exports = reverseString