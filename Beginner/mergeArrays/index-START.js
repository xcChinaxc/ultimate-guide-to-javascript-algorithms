/* CHALLENGE
 Given two or more arrays, write a function that combines their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// Using Sets
function mergeArrays(...arrays){
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return Array.from(new Set([...jointArray]))
}

// Using the filter method
function mergeArrays(...arrays){
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArr = jointArray.filter( (e,i) => jointArray.indexOf(e) === i)
    return uniqueArr
}

// Using the reduce method
function mergeArrays(...arrays){
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArr = jointArray.reduce( (newArr, item) => {
        if(newArr.includes(item)){
            return newArr
        } else {
            return [...newArr, item]
        }
    }, [])
    return uniqueArr
}

module.exports = mergeArrays