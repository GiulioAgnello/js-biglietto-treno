//  informazioni
// alert("messaggio per me");
const userAge = parseInt(prompt("quanti anni hai ?"));
const userkm = parseInt(prompt("quanti km devi percorrere ?"));
const priceporkm = userkm * 0.21;
const discount20 = (priceporkm * 20) / 100;
const tarifYoung = priceporkm - discount20;
const discount40 = (priceporkm * 40) / 100;
const tarifOver = priceporkm - discount40;

console.log("userAge", userAge);
console.log("userkm", userkm);
console.log("priceporkm", priceporkm);
console.log("tarifYoung", tarifYoung);
console.log("tarifOver", tarifOver);

// controllo

if (!isNaN(userAge) && !isNaN(userkm)) {
  let outputText;
  // logica

  if (userAge < 18) {
    outputText = tarifYoung + "€";
  } else if (userAge > 65) {
    outputText = tarifOver + "€";
  } else {
    outputText = priceporkm + "€";
  }

  alert(outputText);
}

// altrimenti errore
else {
  alert("imput non validi");
}
