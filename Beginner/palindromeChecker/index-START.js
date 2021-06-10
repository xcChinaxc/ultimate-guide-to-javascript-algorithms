/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// First Try
function palindromeChecker(text) {
    reversed = text.split("").reverse().join("")
    return text === reversed
}

// An Intuitive Approach
function palindromeChecker(text) {
    reversed = text.toLowerCase().split("").reverse().join("")
    return text === reversed
}

// Looping Through and Comparing Characters
function palindromeChecker(text){
    let charArry = text.toLowerCase().split(""),
    result = charArry.every( (letter, index) => {
        return letter === charArry[charArry.length - index - 1]
    } )
    return result
}

// Looping Through and Comparing Characters(Optimized)
function palindromeChecker(text){
    let textLen = text.length
    for(let i=0; i < textLen / 2; i++){
        if(text[i] !== text[textLen - 1 -i]){
            return false
        }
    }
    return true
}

module.exports = palindromeChecker;