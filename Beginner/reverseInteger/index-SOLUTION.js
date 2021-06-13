// USING STRING REVERSAL CHALLENGE AND METHODS
function reverseString(text){
    return [...text].reduce((acc, char) => char + acc, '')
}

function reverseInteger(num){
    let reversedNumber = parseInt(reverseString(num.toString()))
    return (reversedNumber * Math.sign(num))
}