//Chilometri del passeggero
var kmPasseggero = prompt("Quanti chilometri vuoi percorrere?");

document.getElementById('chilometri').innerHTML = "I tuoi chilometri sono:" + " " + kmPasseggero

//Età del passeggero
var etaPasseggero = prompt("Quanti anni hai?");

document.getElementById('eta').innerHTML = "La tua età è di:" + " " + etaPasseggero + " " + "anni"

//Prezzo del biglietto a chilometro
var prezzoChilometro = 0.21;

//Prezzo del biglietto in base ai chilometri inseriti
var prezzoBiglietto = Math.ceil(kmPasseggero * prezzoChilometro);


//Prezzo biglietto under 18

var calcoloBigliettoUnder18 = (prezzoBiglietto / 100 * 20);

var prezzoBigliettoUnder18 = Math.ceil(prezzoBiglietto - calcoloBigliettoUnder18);


//Prezzo biglietto under 65

var calcoloBigliettoOver65 = (prezzoBiglietto / 100 * 40);

var prezzoBigliettoOver65 = Math.ceil(prezzoBiglietto - calcoloBigliettoOver65);



if (etaPasseggero < 18) {
  document.getElementById('prezzo').innerHTML = "Il tuo biglietto scontato del 20% costa:" + " " + prezzoBigliettoUnder18 + "€"
} else if (etaPasseggero > 65) {
  document.getElementById('prezzo').innerHTML = "Il tuo biglietto scontato del 40% costa:" + " " + prezzoBigliettoOver65 + "€"
} else {
  document.getElementById('prezzo').innerHTML = "Il tuo biglietto interno costa:" + " " + prezzoBiglietto + "€"
}


console.log(kmPasseggero, etaPasseggero, prezzoBiglietto, prezzoBigliettoUnder18, prezzoBigliettoOver65);






// Numero di riferimento

var referNumber = Math.floor(Math.random() * 10000000);

document.getElementById('refer-number').innerHTML = "Ref. Number:" + " " + referNumber

//Numero del volo

var flightNumber = Math.floor(Math.random() * 10000);

document.getElementById('flight-number').innerHTML = "Numero di volo:" + " " + flightNumber
