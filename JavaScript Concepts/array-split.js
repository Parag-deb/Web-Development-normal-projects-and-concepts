const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5); // from index 2 to index 5
console.log(part);
console.log("after slice main array -" , nums);

const removed = nums.splice(2,4);
console.log(removed);
console.log("after splice main array -" , nums);

const together = nums.join("-");//join joins all the array elements in one string
console.log(together);