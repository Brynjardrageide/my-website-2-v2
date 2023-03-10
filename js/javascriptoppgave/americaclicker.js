//score
if (localStorage.getItem('score') === null){ //Basically sjekker om vi ikke har land i america
    //Data item doesn't exist
    console.log("No data found for cookies!"); //informerer at det ikke er blit brukkt
    var score = 0; //score for cookie starter

}else{ // vis vi har har score
    //Data item exists
    console.log("Data found for cookies!"); //informerer at det er blit brukkt
    var score = Number(localStorage.score); // henter scoren og endrer den fra string til  nummer
    document.getElementById("score").innerHTML = score; // inputer det på netsiden 
}
if(localStorage.getItem("Colinasiercost") === null){ //sjekker om det ercolinisercost
    //Data item doesn't exist
    console.log("No data found for colinisersprice!"); //informerer om ble funner
    var Colinasiercost = 10; // seter pris til 10 første gang
} else { // hvis det er data
    //Data item exists
    console.log("Data found for Colinasiercost!"); //informerer om ble funner
    var Colinasiercost = Number(localStorage.Colinasiercost); // henter data og gjør det til et nummer 
    document.getElementById("Colinasiercost").innerHTML = Colinasiercost; // puter pris på netsiden på en spesefik id
}
if (localStorage.getItem("Colinasier") === null) { // igjen
    //Data item doesn't exist
    console.log("No data found for colinisersprice!");// igjen
    var Colinasier = 10;// igjen
} else { // igjen
    //Data item exists
    console.log("Data found for Colinasier!"); // igjen
    var Colinasier = Number(localStorage.Colinasier); // igjen
    document.getElementById("Colinasier").innerHTML = Colinasier; // igjen
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

    // variabler som ikke er i storage
//click additional
let adion = 1;
//time speeds
let Colinasiertime = 1000
let citytime = 1000

//knapp
const mainButon = document.getElementById("cockie");

// ster alt på plass før vi gjør noe annet på netsiden
//scores
document.getElementById("score").innerHTML = score;  // igjen
    //colinaisers      
document.getElementById("Colinasiercost").innerHTML = Colinasiercost;   // igjen     
document.getElementById("Colinasier").innerHTML = Colinasier;
    //city
document.getElementById("score").innerHTML = score;        
document.getElementById("citycost").innerHTML = citycost;      
document.getElementById("cityes").innerHTML = cityes;


//leger til mer land eller mere score
function update(amount) {   //seter en variabel som skall vøere hvor mye score du skall lege til til        dette kan vi senere bruke til å bruke påupgrades men det gjør eg ikke 
    score = score + amount; // oppdaterer en score
    storing(); // paser på alt av lagring og inner HTML
}

//funkjon til lagring og inner HTML
function storing(){
    

    // update scores på netsiden
    document.getElementById("Colinasiercost").innerHTML = Colinasiercost;        
    document.getElementById("Colinasier").innerHTML = Colinasier;
    document.getElementById("score").innerHTML = score;        
    document.getElementById("citycost").innerHTML = citycost;      
    document.getElementById("cityes").innerHTML = cityes;

    // local storage saving functions
        //score direckte
    localStorage.setItem('score', score.toString());
    score = Number(localStorage.getItem('score'));
        //colinesier uppgrade
    localStorage.setItem('Colinasiercost', Colinasiercost.toString()); //pris
    Colinasiercost = Number(localStorage.getItem('Colinasiercost')); //pris
    localStorage.setItem('Colinasier', Colinasier.toString());  //antal
    Colinasier = Number(localStorage.getItem('Colinasier')); //antal
        // byer upgrade
    localStorage.setItem('cityes', cityes.toString()); // antal
    cityes = Number(localStorage.getItem('cityes'));//antal
    localStorage.setItem('citycost', citycost.toString()); //pris
    citycost = Number(localStorage.getItem('citycost'));//priss
}

//uppgrader funskjoner
//kjøpe oppgradering for the collnaiser
function buyColinasier(){ 
    if (score >=Colinasiercost){ // passer på at du ikke kan kjøpe når du ikke har for lite
        score = score - Colinasiercost // fjerner penger
        Colinasiercost = Colinasiercost + 5; // øker pris
        Colinasier++ //økker antal
        storing()
    } 
}
function buycity(){ //same here annen upgrade
    if (score >=citycost){
        score = score - citycost
        citycost = citycost + 10;
        cityes++
        storing()
    } 
}
//auto cliclers
//for colinicer
setInterval(function(){ //fette skjer hele tiden
    score = score + Colinasier; // leger til score når vi har colinicer eller ingen ting
    storing() // opptater alt
}, Colinasiertime); //bestemer hvor kjapt
//for city
setInterval(function(){ //same as above
    score = score + cityes*10;
    storing()
}, citytime);
function reset(){ //reset function til det variables var når du started
    score = 0;
    Colinasier = 0;
    Colinasiercost = 10;
    citycost = 100;
    cityes = 0;
    storing()

}