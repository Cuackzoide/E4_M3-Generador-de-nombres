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

document.querySelector("#form-btn").addEventListener("click", (e) => {
  e.preventDefault();
  let firstNameInput = document.querySelector("#firstName").value;
  if (firstNameInput === "" || !FORMAT.test(firstNameInput)) {
    document.querySelector("#name-error").hidden = false;
    return;
  } else {
    document.querySelector("#name-error").hidden = true;
  }
  let userFirstChar = nameSlicer(firstNameInput, 1);
  let lastNameInput = document.querySelector("#lastName").value;
  if (lastNameInput === "" || !FORMAT.test(lastNameInput)) {
    document.querySelector("#lastName-error").hidden = false;
    return;
  } else {
    document.querySelector("#lastName-error").hidden = true;
  }
  let userlastString = nameSlicer(lastNameInput, 3);
  let userRandomNumber = aleatoryNumber().toLocaleString();
  let userName = userFirstChar.concat(userlastString, userRandomNumber);
  document.querySelector("#data-section").innerHTML += `
  <div class="col-4 m-4"> 
    <div class="card">
      <div class="card-header">
      Username: ${userName}
      </div>
    <div class="card-body">
      <p>First Name: ${firstNameInput}</p>
      <p>Last Name: ${lastNameInput}</p>
    </div>
  </div>`;
});
