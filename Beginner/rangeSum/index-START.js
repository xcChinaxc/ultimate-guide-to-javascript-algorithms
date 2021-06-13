/* CHALLENGE
Given an array of two numbers, return the cummulative sum of the two numbers and all the numbers between them. 
e.g. rangeSum([1,9]) // Should return 45 i.e 1+2+3+4+5+6+7+8+9
*/

// First Try
function rangeSum(arr){
    let start = arr[0], 
        stop = arr[1]
    arrayRange = Array.from( {length: (stop - start) + 1 }, (_,i) => start + i )
    return arrayRange.reduce((a,c) => a+c)
}

// Using a for-loop
function rangeSum(arr){
    let sum = 0
    for(let i=0; i<arr[1]; i++){
        sum += i
    }
    return sum
}

// Using the Arithmetic Progession Formula
function rangeSum(arr) {
    return ((arr[1] - arr[0] +1) * (arr[0] + arr[1])) / 2;
}

// Using recursion
function rangeSum(arr){
    if(arr[0] == arr[1]){
        return arr[0]
    } else {
        return rangeSum([arr[0], arr[1] - 1]) + arr[1]
    }
}

// Using reduce
function rangeSum(arr){
    let arrList = []
    for(let i = arr[0]; i <= arr[1]; i++){
        arrList.push(i)
    }
    return arrList.reduce((acc, num) => acc + num, 0)
}

module.exports = rangeSum