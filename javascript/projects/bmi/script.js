// calculate BMI
// Formula: const bmi = (weight / ((height * height) / 10000)).toFixed(2);

// form submit
// button click

const form = document.querySelector("form");
const btn = document.querySelector("#btn");
const heightInput = document.querySelector(".height");
const weightInput = document.querySelector(".weight");
const result = document.querySelector("#result");
const error = document.querySelector("#error");

// form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // calculate bmi
  const heightValue = parseInt(heightInput.value);
  const weightValue = parseInt(weightInput.value);

  //   simple validation
  if (heightValue === "" || heightValue < 20 || isNaN(heightValue)) {
    error.textContent = "Height can not be empty or NaN or less than 20";
  } else if (weightValue === "" || weightValue < 2 || isNaN(weightValue)) {
    error.textContent = "Weight can not be empty or NaN or less than 2";
  } else {
    const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
      2
    );
    result.innerHTML = `<h2>${bmi}</h2>`;
  }
});

// on button click
// btn.addEventListener("click", (event) => {
//   event.preventDefault();

//   // calculate bmi
//   const heightValue = parseInt(heightInput.value);
//   const weightValue = parseInt(weightInput.value);

//   const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2);

//   result.innerHTML = `<h2>${bmi}</h2>`;
// });
