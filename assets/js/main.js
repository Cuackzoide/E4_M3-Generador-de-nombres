const FORMAT = /^[\p{L}`´'.\s]+$/u;
function nameSlicer(text, number) {
  return text
    .replace(/[´`'.]/g, "")
    .toLowerCase()
    .slice(0, number);
}
function aleatoryNumber() {
  let number = 0;
  while (number < 10 || number === 100) {
    number = Math.floor(Math.random() * 100);
  }
  return number;
}

let firstNameInput;
do {
  firstNameInput = prompt("Ingrese su primer nombre:");
} while (firstNameInput === null || !FORMAT.test(firstNameInput));
let userFirstChar = nameSlicer(firstNameInput, 1);

let lastNameInput;
do {
  lastNameInput = prompt("ingrese su primer apellido");
} while (lastNameInput === null || !FORMAT.test(lastNameInput));
let userlastString = nameSlicer(lastNameInput, 3);

let userRandomNumber = aleatoryNumber().toLocaleString();

let userName = userFirstChar + userlastString + userRandomNumber;
console.log(`Tu nombre de usuario es: ${userName}`);
