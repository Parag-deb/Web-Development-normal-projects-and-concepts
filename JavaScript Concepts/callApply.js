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
noramlPerson.chargeBill(1500);
console.log(noramlPerson.salary);
console.log(noramlPerson.firstName);
