/* informazioni */
// alert("messaggio per me");
const userAge = parseInt(prompt("quanti anni hai ?"));
const userkm = parseInt(prompt("quanti km devi percorrere ?"));
const priceporkm = userkm * 0.21;
const discount20 = (priceporkm * 20) / 100;
const tarifYoung = priceporkm - discount20;
const discount40 = (priceporkm * 40) / 100;
const tarifOver = priceporkm - discount40;

console.log(userAge);
console.log(userkm);
console.log(priceporkm);
console.log(tarifYoung);
console.log(tarifOver);

/* azioni */
