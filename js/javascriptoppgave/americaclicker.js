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
if(localStorage.getItem("cityes") === null){
    //Data item doesn't exist
    console.log("No data found for colinisersprice!");
    var cityes = 0;
} else {
    //Data item exists
    console.log("Data found for cityes!");
    var cityes = Number(localStorage.cityes);
    document.getElementById("cityes").innerHTML = cityes; 
}
if (localStorage.getItem("citycost") === null) {
    //Data item doesn't exist
    console.log("No data found for colinisersprice!");
    var citycost = 100;
} else {
    //Data item exists
    console.log("Data found for citycost!");
    var citycost = Number(localStorage.citycost);
    document.getElementById("citycost").innerHTML = citycost; 
}

//click additional
let adion = 1;


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
    storing();
}

function storing(){
    localStorage.setItem('score', score.toString());
    score = Number(localStorage.getItem('score'));
    localStorage.setItem('Colinasiercost', Colinasiercost.toString());
    Colinasiercost = Number(localStorage.getItem('Colinasiercost'));
    localStorage.setItem('Colinasier', Colinasier.toString());
    Colinasier = Number(localStorage.getItem('Colinasier'));
    localStorage.setItem('cityes', cityes.toString());
    cityes = Number(localStorage.getItem('cityes'));
    localStorage.setItem('citycost', citycost.toString());
    citycost = Number(localStorage.getItem('citycost'));
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
        storing()
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
        storing()
    } 
}



//auto cliclers
//for colinicer
setInterval(function(){
    score = score + Colinasier;
    document.getElementById("score").innerHTML = score;   
    storing()
}, Colinasiertime);
//for city
setInterval(function(){
    score = score + cityes*10;
    document.getElementById("score").innerHTML = score;      
    storing()
}, citytime);
function reset(){
    score = 0;
    Colinasier = 0;
    Colinasiercost = 10;
    citycost = 100;
    cityes = 0;
    storing()
    document.getElementById("score").innerHTML = score;        
    document.getElementById("Colinasiercost").innerHTML = Colinasiercost;        
    document.getElementById("Colinasier").innerHTML = Colinasier;
    document.getElementById("score").innerHTML = score;        
    document.getElementById("citycost").innerHTML = citycost;      
    document.getElementById("cityes").innerHTML = cityes;
}