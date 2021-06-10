// USING AN IMPERATIVE APPROACH
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

// USING A DECLARATIVE APPROACH
function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}