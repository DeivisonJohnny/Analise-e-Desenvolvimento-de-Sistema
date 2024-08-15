const inputs = document.querySelectorAll(".inputs");
const spans = document.querySelectorAll(".spans");

const allIsValidate = false;

function setOrRemoveError(index, active) {
  if (!active) {
    spans[index].classList.remove("spanRequired");
    inputs[index].classList.remove("inpRequired");
    return null;
  }
  inputs[index].classList.add("inpRequired");
  spans[index].classList.add("spanRequired");
}

// Valida o nome e residencia

function validateInpText(index) {
  if (inputs[index].value.length > 3) {
    setOrRemoveError(index, false);
    return true;
  }
  setOrRemoveError(index, true);

  return false;
}

inputs[0].addEventListener("input", () => {
  validateInpText(0);
});
inputs[3].addEventListener("input", () => {
  validateInpText(3);
});

function validateEmail(index) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(inputs[index].value)) {
    setOrRemoveError(index, false);
    return true;
  }

  setOrRemoveError(index, true);
  return false;
}

inputs[1].addEventListener("input", () => {
  validateEmail(1);
});

function validateDate(index) {
  let isValid = false;

  const DateObject = new Date();

  const day = DateObject.getDate();
  let month = DateObject.getMonth() + 1;
  const year = DateObject.getFullYear() - 18;
  month = month.toString().padStart(2, "0");

  const dateMax = `${year}-${month}-${day}`;

  if (inputs[index].value < dateMax) {
    setOrRemoveError(index, false);
    spans[index].textContent = "Preencha corretamente";
    return true;
  }

  spans[index].textContent = "Deve ser maior de 18 anos";
  setOrRemoveError(index, true);
  return false;
}

inputs[2].addEventListener("change", () => {
  validateDate(2);
});

function validatePref(index) {
  let isValid = false;

  if (inputs[index].value.length > 5) {
    setOrRemoveError(index, false);
    return true;
  }
  setOrRemoveError(index, true);

  return false;
}

inputs[4].addEventListener("input", () => {
  validatePref(4);
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  if (
    !validateInpText(0) ||
    !validateInpText(3) ||
    !validateEmail(1) ||
    !validatePref(4)
  ) {
    validateInpText(0);
    validateInpText(3);
    validateEmail(1);
    validatePref(4);
    event.preventDefault();
  }
});



const btnLimpar = document.querySelector('#btnLimpar')

btnLimpar.addEventListener('click', ()=>{
  inputs.forEach(inp => {
    inp.value = ''
  });
} )