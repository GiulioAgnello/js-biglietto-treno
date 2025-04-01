//  informazioni
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

  if (userAge < 0) {
    alert("Valore anni non valido");
  }
  if (userkm < 0) {
    alert("Valore km non valido");
  }
  // logica

  if (userAge < 18) {
    outputText =
      "la tua tariffa è scontata del 20%" + " " + tarifYoung.toFixed(2) + "€";
  } else if (userAge > 65) {
    outputText =
      "la tua tariffa è scontata del 40%" + " " + tarifOver.toFixed(2) + "€";
  } else {
    outputText = "la tua tariffa è" + " " + priceporkm.toFixed(2) + "€";
  }

  alert(outputText);
}

// altrimenti errore
else {
  alert("inserire valori validi");
}
