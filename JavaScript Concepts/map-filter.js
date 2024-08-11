const numbers = [3,4,5,6,7,8];
// const output =[];

// for (let i= 0 ; i < numbers.length ; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

//  map - returns an array
// numbers.map(function(element , index , array){
//     console.log(element, index , array);
// })

// function square(element){
//     return element*element;
// } 
//arrow function
// const square = x => x*x;

// const result = numbers.map(x => x*x);

const result = numbers.map(function(element){
    return element*element;
})
console.log(result);

// filter - returns an array
 const bigger = numbers.filter(x => x>5)
 console.log(bigger);

//  find - returns one number/element
const isthere = numbers.find(x => x>5);
console.log("find-" ,isthere );