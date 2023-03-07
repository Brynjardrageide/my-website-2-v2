//score
var score = 0;
//click additional
let adion = 1;

//upgrades
    //colinasiers
let Colinasiercost = 10;
let Colinasier = 0;
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


//leger til mer lnd eller 
function update(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}


//uppgrader funskjoner
//kjøpe oppgradering for the collnaiser
function buyColinasier(){
    if (score >=Colinasiercost){
        score = score - Colinasiercost
        Colinasiercost = Colinasiercost * 1.15;
        Colinasier++

        document.getElementById("score").innerHTML = score;        
        document.getElementById("Colinasiercost").innerHTML = Colinasiercost;        
        document.getElementById("Colinasier").innerHTML = Colinasier;

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

    } 
}



//auto cliclers
//for colinicer
setInterval(function(){
    score = score + Colinasier;
    document.getElementById("score").innerHTML = score;      
    Colinasiertime -= 1;  
}, Colinasiertime);
setInterval(function(){
    score = score + cityes;
    document.getElementById("score").innerHTML = score;      
    citytime -= 1;  
}, citytime);