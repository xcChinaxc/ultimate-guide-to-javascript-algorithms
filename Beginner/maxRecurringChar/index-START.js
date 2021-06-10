/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// Example 1 - For…in Iteration 
function maxRecurringChar(text) {
    let charMap = {},
    maxCharValue = 0,
    maxChar = ''

    for(let char of text){
        if( charMap.hasOwnProperty(char) ){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for(let char in charMap){
        if(charMap[char] > maxCharValue){
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

// Example 2 - Forming Arrays from the Character Map 
function maxRecurringChar(text){
    let charMap = {},
    charArray = [],
    valuesArray = [],
    maxCharValue = 0

    for(let char of text){
        if( charMap.hasOwnProperty(char) ){
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]
}

module.exports = maxRecurringChar;