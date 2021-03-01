//Chilometri del passeggero
var kmPasseggero = prompt("Quanti chilometri vuoi percorrere?");

//Età del passeggero
var etaPasseggero = prompt("Quanti anni hai?");

//Prezzo del biglietto a chilometro
var prezzoChilometro = 0.21;

//Prezzo del biglietto in base ai chilometri inseriti
var prezzoBiglietto = kmPasseggero * prezzoChilometro;


//Prezzo biglietto under 18

var calcoloBigliettoUnder18 = (prezzoBiglietto / 100 * 20);

var prezzoBigliettoUnder18 = prezzoBiglietto - calcoloBigliettoUnder18;


//Prezzo biglietto under 65

var calcoloBigliettoOver65 = (prezzoBiglietto / 100 * 40);

var prezzoBigliettoOver65 = prezzoBiglietto - calcoloBigliettoOver65;



if (etaPasseggero < 18) {

} else {
  if (etaPasseggero > 65) {

  }
}

console.log(kmPasseggero, etaPasseggero, prezzoBiglietto);
