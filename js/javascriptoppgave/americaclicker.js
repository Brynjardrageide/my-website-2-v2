//score
var score = 0;
//click additional
let adion = 1;

//upgrades
//colinasiers
let Colinasiercost = 10;
let Colinasier = 0;

const mainButon = document.getElementById("cockie");

document.getElementById("score").innerHTML = score;        
document.getElementById("Colinasiercost").innerHTML = Colinasiercost;        
document.getElementById("Colinasier").innerHTML = Colinasier;

function update(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}
function buyColinasier(){
    if (score >=Colinasiercost){
        score = score - Colinasiercost
        Colinasiercost = Colinasiercost + 10;
        Colinasier++

        document.getElementById("score").innerHTML = score;        
        document.getElementById("Colinasiercost").innerHTML = Colinasiercost;        
        document.getElementById("Colinasier").innerHTML = Colinasier;

    } 
}
setInterval(function(){
    score = score + Colinasier;
    document.getElementById("score").innerHTML = score;        
}, 1000);