const students =[
    {id: 21 , name:'Omar Sunny'},
    {id: 31 , name:'Manna'},
    {id: 41 , name:'Moyori'},
    {id: 51 , name:'Depjoln'},
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(x => x.id>40);
const biggerOne = students.find(x => x.id>40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);