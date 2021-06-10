/* CHALLENGE
Given a sentence, return the longest word in the string.
E.g longestWord('Top Shelf Web Development Training on Scotch') //should return 'Development'
*/

// First Try
function longestWord(text) {
    let newArr = [],
        textArr = text.split(" ")
    textArr.forEach(word => newArr.push(word.length))
    wordIndex = textArr.findIndex(word => word.length == Math.max(...newArr))
    return textArr[wordIndex]
}

// For Loop
function longestWord(text){
    let wordArray = text.split(" "),
        maxLength = 0,
        result = ''

    for( let i=0; i < wordArray.length; i++ ){
        if(wordArray[i].length > maxLength){
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}

// Reduce
function longestWord(text){
    let result = text.split(" ").reduce( (maxLengthWord, currentWord) => {
        if(currentWord.length > maxLengthWord.length){
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    return result
}

// Sort
function longestWord(text){
    let sortedArr = text.split(" ").sort( (wordA, wordB) => wordB.length - wordA.length )
    return sortedArr[0]
}

module.exports = longestWord