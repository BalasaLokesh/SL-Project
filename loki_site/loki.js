
var Database = [
    {
        username: "Lokesh",
        password: "Loki Lords"
    }    
];
var Newsfeed = [
    {
        username: "Avin Asher",
        timeline: "I'm sorry I'm feeling so tired!"
    },
    {
        username: "Ganga Gangs",
        timeline: "wow today I'm so happy,but I don't know the reason!"
    }
];

var usernamePrompt=prompt("What is ur username?");
var passwordPrompt=prompt("What is ur password?");

function signIn(user, pass){
if(user==Database[0].username && pass==Database[0].password)
{
console.log(Newsfeed);
}
else
{
 alert("sorry! ur user and pass or incorrect!");   
}
}
signIn(usernamePrompt,passwordPrompt);