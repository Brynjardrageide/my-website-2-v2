//en funshon er noe som skal utføre en oppgave
//her skal de determe en style til en classe skall være none eller active
function openTab(evt, tabName) {
        //her declerer den disse som variabler
    var i, tabcontent, tablinks;
        //her henter han elimenter med classe
    tabcontent = document.getElementsByClassName("tabcontent");

    //her sier den at i  skall vere 0 og viss tabcontent.length er støre en i skall dette gjenomføres
    //i++ er da dette skal tenkes over maskinen
    //for en en slaks loop
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

        //her henter han elimenter med classe
    tablinks = document.getElementsByClassName("tablinks");

    //her sier den at i  skall vere 0 og viss tabcontent.length er støre en i skall dette gjenomføres
    //her ser den etter et target som er støre en 0 skall class name vere active
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //henter curent rarget altså den som nå er activ og ikke bone og seter en til display block
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}