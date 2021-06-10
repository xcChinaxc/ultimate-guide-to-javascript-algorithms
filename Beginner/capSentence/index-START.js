/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

// First Try
function capSentence(text){
  let textArray = text.toLowerCase().split(" "),
  arr = []

  textArray.forEach(element => {
    arr.push(element[0].toUpperCase() + element.slice(1))
  });

  return arr.join(' ')
}

// For Each Method
function capSentence(text) {
   let wordsArray = text.toLowerCase().split(" "),
   capsArray = []

   wordsArray.forEach(word => {
     capsArray.push(word[0].toUpperCase() + word.slice(1))
   })

   return capsArray.join(" ")
}

// Map and Slice
function capSentence(text){
  let wordsArray = text.toLowerCase().split(" "),
  capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(" ")
}

// Map and Replace
function capSentence(text){
  let wordsArray = text.toLowerCase().split(" "),
  capsArray = wordsArray.map( word => {
    return word.replace(word[0], word[0].toUpperCase())
  })
  return capsArray.join(" ")
}

module.exports = capSentence