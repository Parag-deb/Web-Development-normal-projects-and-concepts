class person{
    constructor(firstname , lastname , salary){
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
}
const heroPerson = new person('Hero' , 'Balam' , '20000');
console.log(heroPerson);

const friendlyPerson = new person('Hero' , 'Kalam' , '10000');
console.log(friendlyPerson);