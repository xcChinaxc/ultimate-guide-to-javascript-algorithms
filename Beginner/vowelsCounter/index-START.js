/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// First Try
function vowelsCounter(text){
    text = text.toLowerCase()
    matches = text.match(/[aeiou]/g)
    if(matches){
        return match.length
    } else {
        return 0
    }
}

// Iterative Approach
const vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
    let count = 0
    for(let letter of text.toLowerCase()){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}

// Regular Expression
function vowelsCounter(text){
    let matching = text.match(/[aeiou]/gi)
    if(matching){
        return matching.length
    } else {
        return 0
    }
}

module.exports = vowelsCounter;