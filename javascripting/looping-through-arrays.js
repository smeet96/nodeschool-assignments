//  ## The challenge:  
   
//   Create a file named looping-through-arrays.js.  
   
//   In that file, define a variable named pets that references this array:  
   
//      ['cat', 'dog', 'rat']  
   
//   Create a for loop that changes each string in the array so that they are  
//   plural.

//   You will use a statement like this inside the for loop:

//      pets[i] = pets[i] + 's'

//   After the for loop, use console.log() to print the pets array to the
//   terminal.

const pets = ['cat', 'dog', 'rat']
const length = pets.length

for (let i=0 ; i < length ; i++){
    pets[i] = pets[i]+ 's'
}

console.log(pets)