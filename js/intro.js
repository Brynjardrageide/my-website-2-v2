const btnknapp = document.getElementById("knapp")
const inpalder = document.getElementById("inpalder")

btnknapp.addEventListener("click", sjekkAlder)

function sjekkAlder(){
    alder = inpalder.value
    console.log(alder)

    if (alder<18){
        document.getElementById('lol').innerText = 'du er ikke myndig'
    } else{
        document.getElementById('lol').innerText = ' du er myndig'
    }
}