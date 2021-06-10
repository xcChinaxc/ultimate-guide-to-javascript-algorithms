/* CHALLENGE
Translate the provided string to Pig Latin by following the rules below:
- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed
    - e.g. "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. 
    - e.g. "glove" = "oveglay"
- For words that begin with vowel sounds, simply add "way" to the end of the word.
    - e.g. "explain" = "explainway”
*/

// First Try
function pigLatin(text){
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'],
        newArr = []
    if (vowelsArr.includes(text[0])){
        return text.concat('way')
    } else if (vowelsArr.includes(text[1])) {
        return text.slice(1) + text.charAt(0) + 'ay'
    } else {
        firstVowel = text.search(/[aeiou]/i)
        return text.slice(firstVowel) + text.slice(0, firstVowel) + "ay"
    }
}

// An Imperative Approach
function pigLatin(str){
    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u'],
        vowelIndex = 0
    
    if(vowels.includes(str[0])){
        return str + 'way'
    } else {
        for(let char of str){
            if(vowels.includes(char)){
                vowelIndex = str.indexOf(char)
                break
            }
        }
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
    }
}

// A Declarative Approach - given solution does not seem to pass all the rest right now
function pigLatin(str) {
    return (str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
)}

module.exports = pigLatin