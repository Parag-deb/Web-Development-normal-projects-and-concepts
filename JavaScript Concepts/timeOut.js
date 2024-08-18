function doSomething(){
    console.log(3333);
}
console.log(2222);
// setTimeout(doSomething);
setTimeout(doSomething , 40000); //4000 mili second- it will work after 4 second
setTimeout(() => {  //with arrow function
    console.log(" after waiting 4 second");
},4000);
console.log(4444);
console.log(5555);

setInterval(()=>{
    console.log("setInterval - doing it again after 1 second");
},1000);

//setTimeOut will work after finish the all other works