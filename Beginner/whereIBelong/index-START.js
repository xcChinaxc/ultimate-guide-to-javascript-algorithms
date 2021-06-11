/* CHALLENGE
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

// First Try
function whereIBelong(arr, num) {
   let result = 0,
      sorted = arr.sort( (a,b) => a-b )
   for(let i=0; i < sorted.length; i++){
      if(num >= sorted[i]){
        result = i + 1
      }
    }
    return result
}

// Using a For-loop to find the immediate larger value's position
function whereIBelong(arr, num){
   arr.sort((a,b) => {
      return a-b
   })

   for(let i = 0; i < arr.length; i++){
      if(arr[i] >= num){
         return i
      }
   }
   return arr.length
}

// Using a For-loop to determine the number of smaller values
function whereIBelong(arr, num){
   let counter = 0
   for(let i=0; i < arr.length; i++){
      if(num > arr[i]){
         counter++
      }
   }
   return counter
}

// Using a while loop to count the smaller values
function whereIBelong(arr, num){
   arr.sort((a,b) => {
      return a-b
   })
   let counter = 0
   while(num > arr[counter]){
      counter++
   }
   return counter
}

// Finding the index of the value directly
function whereIBelong(arr, num){
   arr.push(num)
   arr.sort((a,b) => a - b)
   return arr.indexOf(num)
}


module.exports = whereIBelong