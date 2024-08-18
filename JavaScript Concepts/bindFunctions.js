//if there is a method in an object and we neeed to use that  that method on other objects, then we can use bind /call / apply.

// these are important for interview

const noramlPerson ={
    firstName : 'Rahim',
    lastName : 'uddin',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill : function(amount){
        this.salary = this.salary-amount;
        return this.salary;
    }
}

const heroPerson ={
    firstName: 'Hero',
    lastName: 'Balam',
    salary : 25000,
}
const friendlyPerson ={
    firstName: 'Hero',
    lastName: 'GOlam',
    salary : 25000,
}

//bind

noramlPerson.chargeBill();
const heroChargeBill = noramlPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
console.log(heroPerson.salary);

//call - same as works as bind 
// in call - first argument is the object(for which we want to use) name, and the second /third (if there is ) arguments are the functions arguments

noramlPerson.chargeBill.call(heroPerson,500);
console.log(heroPerson.salary);


//apply -- for apply after passing first argument we have to pass all the arguments in an array. 

noramlPerson.chargeBill.apply(heroPerson , [3000]);
console.log(heroPerson.salary);


