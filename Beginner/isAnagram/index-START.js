/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// First Try
function isAnagram(stringA, stringB) {
    if(stringA.length == stringB.length){
        stringAArr = stringA.split("").sort().join("")
        stringBArr = stringB.split("").sort().join("")
        result = stringAArr == stringBArr
    }
    return result
}

// Direct Comparison
function isAnagram(stringA, stringB){
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("")
    } 
    return sanitizeString(stringA) == sanitizeString(stringB)
}

// Character Map Comparison
function isAnagram(stringA, stringB){
    // create char map
    function createCharMap(text){
        let charMap = {}
    
        for( let char of text ){
            if(charMap.hasOwnProperty(char)){
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }
        return charMap
    }
    // compare strings
    if(stringA.length === stringB.length){
        let stringAMap = createCharMap(stringA),
            stringBMap = createCharMap(stringB)

        for( let char in stringAMap){
            if(stringAMap[char] !== stringBMap[char]){
                return false
            }
        }
        return true
    } else {
        return false
    }
}

module.exports = isAnagram