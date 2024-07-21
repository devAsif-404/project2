let nightmode = false;

const handleMode = () => {
  nightmode = !nightmode;
  changeMode();
}

const changeMode = () => {
  const dayNight = document.querySelector(".day-night");
  const buttons = document.getElementsByTagName('button');

  if (nightmode) {
    dayNight.querySelector("i").className = "fas fa-sun";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("dataset-light");
      buttons[i].classList.add("dataset-dark");
    }
  } else {
    dayNight.querySelector("i").className = "fas fa-moon";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("dataset-dark");
      buttons[i].classList.add("dataset-light");
    }
  }
}

let flag = 0;
const pressme = () => {
  let nav1 = document.querySelector(".aside");
  const c1 = nav1.querySelector(".nav-toggler");
  if (flag === 0) {
    nav1.classList.add("open");
    c1.classList.add("open");
    flag = 1;
  } else {
    nav1.classList.remove("open");
    c1.classList.remove("open");
    flag = 0;
  }
}

// Update button click event
const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', updateInfo);

function updateInfo() {
  const currentInfo = document.getElementById('info-container').innerHTML;
  const newInfo = prompt('Enter the new information:');

  if (newInfo !== null) {
    document.getElementById('info-container').innerHTML = newInfo;
    alert('Information updated successfully!');
  } else {
    alert('Update cancelled.');
  }
}

// Additional code
const updateButton = document.getElementById('update-button');
const updateForm = document.getElementById('update-form');
const newFormItem = document.getElementById('new-item');
const newContainer = document.getElementById('new-item-container');
const portfolioList = document.getElementById('portfolio-list');

updateButton.addEventListener('click', () => {
  updateForm.style.display = updateForm.style.display === 'none' ? 'block' : 'none';
});

updateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItemValue = newFormItem.value.trim();

  if (newItemValue !== '') {
    const newListItem = document.createElement('li');
    newListItem.textContent = newItemValue;
    portfolioList.appendChild(newListItem);
    newFormItem.value = '';
    newContainer.innerHTML = `<p>New item added: ${newItemValue}</p>`;
  }
});

const addInfoBtn = document.querySelector('.add-info-btn');
addInfoBtn.addEventListener('click', () => {
  console.log('Add Information/Update button clicked!');
});

// Adding event listener to the day-night toggle button
const dayNightToggle = document.querySelector('.day-night');
dayNightToggle.addEventListener('click', handleMode);
