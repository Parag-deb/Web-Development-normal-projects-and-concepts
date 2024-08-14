const user = {
    id :245,
    name : "Masud",
    lover :{
        name :"jamila",
        javFood :"Pizza",
    },
    friendAge : [12,15,45],
    friends : ["kamal", "jamal" , "samal"],
};

const userJSON = JSON.stringify(user);
console.log("afert Stringify -" ,userJSON );

const userFromJSON = JSON.parse(userJSON);
console.log("after parse -" , userFromJSON);