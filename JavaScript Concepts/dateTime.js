const strat = new Date();
let sum = 0;
for (let i =0 ; i<1000000000 ; i++){
    sum++; 
}
const end = new Date();

console.log('time to run loop in mili second-' , end - strat);