function add(num1 ,  num2){
    //argument is not an array , not an object, 
    //it is array like object
    console.log([...arguments]); // converting arguments in array
    return num1 +num2 + arguments[2];
}
const result = add(2,3,5,7);
console.log(result);