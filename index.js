let btn = document.querySelector("#openModal");
let input = document.querySelector(".inputName");
let age = document.querySelector(".age");
let dateInput = document.querySelector(".dateInput");
let selectEducation = document.querySelector("#selectEducation");
let gender = document.querySelector(".gender");
let modal = document.querySelector(".modal-content");

btn.addEventListener("click", () => {
  modal.innerHTML = `
  <a href="#close" title="Close" class="close">×</a>
    <li>N S L: ${input.value}</li>
    <li>Age: ${age.value}</li>
    <li>BirthDay: ${dateInput.value}</li>
    <li>Education: ${selectEducation.value}</li>
    <li>Gender: ${genderValidate(gender)}</li>
    `;
});

function genderValidate(gender) {
  if (gender.checked) {
    gender.value = "Man";
  } else gender.value = "Wooman";
  return gender.value;
}

// btn.addEventListener("click", () => {
//   console.log(input.value);
//   console.log(age);
//   console.log(dateInput.value);
//   console.log(selectEducation.value);
//   if (gender.checked) {
//     gender.value = "Man";
//   } else gender.value = "Wooman";
//   console.log(gender.value);
// });

// modal.innerHTML += input.value;
//   modal.innerHTML += age.value;
//   modal.innerHTML += dateInput.value;
//   modal.innerHTML += selectEducation.value;
