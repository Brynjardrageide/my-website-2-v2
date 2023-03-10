//score
if (localStorage.getItem('score') === null){
    //Data item doesn't exist
    console.log("No data found for cookies!");
    var score = 0;

}else{
    //Data item exists
    console.log("Data found for cookies!");
    var score = Number(localStorage.score);
    document.getElementById("score").innerHTML = score;  
}
if(localStorage.getItem("Colinasiercost") === null){
    //Data item doesn't exist
    console.log("No data found for colinisersprice!");
    var Colinasiercost = 10;
} else {
    //Data item exists
    console.log("Data found for Colinasiercost!");
    var Colinasiercost = Number(localStorage.Colinasiercost);
    document.getElementById("Colinasiercost").innerHTML = Colinasiercost; 
}
if (localStorage.getItem("Colinasier") === null) {
    //Data item doesn't exist
    console.log("No data found for colinisersprice!");
    var Colinasier = 10;
} else {
    //Data item exists
    console.log("Data found for Colinasier!");
    var Colinasier = Number(localStorage.Colinasier);
    document.getElementById("Colinasier").innerHTML = Colinasier; 
}
//click additional
let adion = 1;

//upgrades
    //colinasiers
    //cityes
let cityes = 0;
let citycost = 100;



//time speeds
let Colinasiertime = 1000
let citytime = 1000

//knapp
const mainButon = document.getElementById("cockie");

//scores
document.getElementById("score").innerHTML = score;        
document.getElementById("Colinasiercost").innerHTML = Colinasiercost;        
document.getElementById("Colinasier").innerHTML = Colinasier;
    //city
document.getElementById("score").innerHTML = score;        
document.getElementById("citycost").innerHTML = citycost;      
document.getElementById("cityes").innerHTML = cityes;


//leger til mer land eller mere score
function update(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
    localStorage.setItem('score', score.toString());
    score = Number(localStorage.getItem('score'));
}


//uppgrader funskjoner
//kjøpe oppgradering for the collnaiser
function buyColinasier(){
    if (score >=Colinasiercost){
        score = score - Colinasiercost
        Colinasiercost = Colinasiercost + 1;
        Colinasier++

        document.getElementById("score").innerHTML = score;        
        document.getElementById("Colinasiercost").innerHTML = Colinasiercost;        
        document.getElementById("Colinasier").innerHTML = Colinasier;

        localStorage.setItem('score', score.toString());
        score = Number(localStorage.getItem('score'));
        localStorage.setItem('Colinasiercost', Colinasiercost.toString());
        Colinasiercost = Number(localStorage.getItem('Colinasiercost'));
        localStorage.setItem('Colinasier', Colinasier.toString());
        Colinasier = Number(localStorage.getItem('Colinasier'));
    } 
}
function buycity(){
    if (score >=citycost){
        score = score - citycost
        citycost = citycost + 10;
        cityes++

        document.getElementById("score").innerHTML = score;        
        document.getElementById("citycost").innerHTML = citycost;      
        document.getElementById("cityes").innerHTML = cityes;

        
        localStorage.setItem('score', score.toString());
        score = Number(localStorage.getItem('score'));
        localStorage.setItem('Colinasiercost', Colinasiercost.toString());
        Colinasiercost = Number(localStorage.getItem('Colinasiercost'));
        localStorage.setItem('Colinasier', Colinasier.toString());
        Colinasier = Number(localStorage.getItem('Colinasier'));
    } 
}



//auto cliclers
//for colinicer
setInterval(function(){
    score = score + Colinasier;
    document.getElementById("score").innerHTML = score;   

    localStorage.setItem('score', score.toString());
    score = Number(localStorage.getItem('score'));
    localStorage.setItem('Colinasiercost', Colinasiercost.toString());
    Colinasiercost = Number(localStorage.getItem('Colinasiercost'));
    localStorage.setItem('Colinasier', Colinasier.toString());
    Colinasier = Number(localStorage.getItem('Colinasier')); 
}, Colinasiertime);
//for city
setInterval(function(){
    score = score + cityes*10;
    document.getElementById("score").innerHTML = score;      

    localStorage.setItem('score', score.toString());
    score = Number(localStorage.getItem('score'));
    localStorage.setItem('Colinasiercost', Colinasiercost.toString());
    Colinasiercost = Number(localStorage.getItem('Colinasiercost'));
    localStorage.setItem('Colinasier', Colinasier.toString());
    Colinasier = Number(localStorage.getItem('Colinasier'));
}, citytime);
