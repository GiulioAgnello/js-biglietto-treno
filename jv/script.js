//  informazioni
const userAge = parseInt(prompt("quanti anni hai ?"));
const userkm = parseInt(prompt("quanti km devi percorrere ?"));
const priceporkm = userkm * 0.21;
const tarifYoung = priceporkm - (priceporkm * 20) / 100;
const tarifOver = priceporkm - (priceporkm * 40) / 100;

console.log("userAge", userAge);
console.log("userkm", userkm);
console.log("priceporkm", priceporkm);
console.log("tarifYoung", tarifYoung);
console.log("tarifOver", tarifOver);

// controllo

let outputText;

if (!isNaN(userAge) && !isNaN(userkm)) {
  // Controllo sei i valori inseriti sono numeri
  if (userAge < 0) {
    // Controllo la correttezza dell'età
    alert("Valore anni non valido");
  } else {
    // età corretta
    if (userkm < 0) {
      // Controllo la correttezza dei km (almeno 1)
      alert("Valore km non valido");
    } else {
      // Ho età e km corretti
      // logica
      if (userAge < 18) {
        outputText =
          "la tua tariffa è scontata del 20%" +
          "  " +
          tarifYoung.toFixed(2) +
          "€";
      } else if (userAge > 65) {
        outputText =
          "la tua tariffa è scontata del 40%" +
          "  " +
          tarifOver.toFixed(2) +
          "€";
      } else {
        outputText = "la tua tariffa è" + " " + priceporkm.toFixed(2) + "€";
      }
      alert(outputText);
    }
  }
} else {
  alert("inserire valori validi");
}
