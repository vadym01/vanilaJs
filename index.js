const formInputDisplay = document.querySelector('form');
const showHideButton = document.getElementById('show-hide-button');
const tbodyElement = document.querySelector('tbody');
const submitFormButton = document.querySelector('form button');
const userInputs = document.querySelectorAll('input');
const deleteButton = document.querySelector('.delete-button');

// window.onload = function () {
//   const deleteButton = document.querySelector('.delete-button');
//   const updateButton = document.querySelector('.update-button');

//   const deleteButtonClickHandler = (event) => {
//     console.log(event);
//   };
//   deleteButton.setAttribute('onclick', deleteButtonClickHandler);
//   deleteButton.addEventListener('click', (event) => console.log(event));
//   //   deleteButton.addEventListener('click');
//   updateButton.addEventListener('click', (event) => console.log(event));
// };

const data = [
  {
    full_name: 'Janes Doe',
    email: 'janes.doe@gmail.com',
    age: 22,
  },
  {
    full_name: 'Olivia Doe',
    email: 'olivia.doe@gmail.com',
    age: 20,
  },
];

const showHideActions = () => {
  formInputDisplay.classList.toggle('hidden');
};

showHideButton.addEventListener('click', showHideActions);

const deleteElement = (email) => {
  let index = 0;
  for (const element of data) {
    if (element.email === email) {
      break;
    }
    index++;
  }
  data.splice(index, 1);

  tbodyElement.children[index].remove();
};

const updateElement = (email) => {
  let index = 0;
  for (const element of data) {
    if (element.email === email) {
      break;
    }
    index++;
  }
  let dataObj = data[index];
  userInputs[0].value = dataObj.full_name;
  userInputs[1].value = dataObj.email;
  userInputs[2].value = dataObj.age;
  showHideActions();
  data.splice(index, 1);
  tbodyElement.children[index].remove();
};

const appendDataToTable = (fullName, email, age) => {
  const newTrElement = document.createElement('tr');
  const newTdElement = document.createElement('td');
  newTdElement.className = 'actions';
  const deleteButtonElement = document.createElement('button');
  const updateButtonElement = document.createElement('button');
  deleteButtonElement.innerHTML = 'Delete';
  deleteButtonElement.onclick = deleteElement.bind(null, email);

  updateButtonElement.innerHTML = 'Update';
  updateButtonElement.onclick = updateElement.bind(null, email);

  newTrElement.innerHTML = `
    <td>${fullName}</td>
    <td>${email}</td>
    <td>${age}</td>
   
    `;

  newTdElement.append(deleteButtonElement);
  newTrElement.append(newTdElement);

  newTdElement.append(updateButtonElement);
  newTrElement.append(newTdElement);

  // newTrElement.addEventListener('click', deleteElement.bind(null, email));
  // document
  //   .querySelector('.delete-button')
  //   .addEventListener('click', deleteElement.bind(null, email));

  tbodyElement.append(newTrElement);
};

// const appendDataToTable = (fullName, email, age) => {
//   const newTrElement = document.createElement('tr');
//   newTrElement.innerHTML = `
//     <td>${fullName}</td>
//     <td>${email}</td>
//     <td>${age}</td>
//     <td>
//      <button class="delete-button">Delete</button>
//     <button class="update-button">Update</button>
//     </td>
//     `;

//   // newTrElement.addEventListener('click', deleteElement.bind(null, email));
//   document
//     .querySelector('.delete-button')
//     .addEventListener('click', deleteElement.bind(null, email));

//   tbodyElement.append(newTrElement);
// };

const forConcat = {
  full_name: 'Janes Doe',
  email: 'janes.doe@gmail.com',
  age: 22,
};

submitFormButtonHandler = (event) => {
  event.preventDefault();
  const fullNameInput = userInputs[0].value;
  const emailInput = userInputs[1].value;
  const ageInput = userInputs[2].value;

  if (
    fullNameInput.trim() === '' ||
    emailInput.trim() === '' ||
    ageInput.trim() === ''
  ) {
    alert('input fields should not be empty');
    return;
  }

  const newEntity = {
    full_name: fullNameInput,
    email: emailInput,
    age: ageInput,
  };

  data.push(newEntity);
  appendDataToTable(fullNameInput, emailInput, ageInput);
  console.log(data);

  showHideActions();
};

(getAll = () => {
  data.forEach((d) => {
    appendDataToTable(d.full_name, d.email, d.age);
  });
})();

submitFormButton.addEventListener('click', () =>
  submitFormButtonHandler(event)
);

// let deleteArr = [...document.getElementsByClassName('delete-button')];
// deleteArr.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     data.splice(index, 1);
//     tbodyElement.removeChild(tbodyElement.children[index]);
//   });
// });

// let updateArr = [...document.getElementsByClassName('update-button')];
// updateArr.forEach((item, index) => {
//   item.addEventListener('click', () => console.log(index));
// });

// deleteData();
