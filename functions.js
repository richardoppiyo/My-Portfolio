const btn = document.querySelector('.humb');
const navLink = document.querySelector('#app-header-menu');
const closeButton = document.querySelector('#humb-cancelor');
const toclose = document.querySelectorAll('.nav-link');
const menuheader = document.querySelector('#app-header-info');

// To open the menu bar
function display() {
  navLink.classList.add('app-header-menu-visible');
  const menu = document.querySelector('#welcome');
  menu.classList.add('welcome-invisible');
  btn.classList.add('humb-invisible');
  closeButton.classList.add('humb-cancel-visible');
  menuheader.classList.add('app-header-hide');
}

// To close the menu bar
function close() {
  navLink.classList.remove('app-header-menu-visible');
  const menu = document.querySelector('#welcome');
  menu.classList.remove('welcome-invisible');
  btn.classList.remove('humb-invisible');
  closeButton.classList.remove('humb-cancel-visible');
  menuheader.classList.remove('app-header-hide');
}

// Adding event Listener humburger menu and the close icon
btn.addEventListener('click', display);
closeButton.addEventListener('click', close);

// Iterates over the list menu anchor tags and listens to click event
toclose.forEach((item) => {
  item.addEventListener('click', close);
});

// creating the Javascript Object to hold the card information
const projectList = [
  {
    id: 1,
    title: 'Book a lawyer\s seervices App ',
    name: 'The Lawyer',
    description: 'A React and Rails web app',
    detail: 'This is an implemetation os a web application for bookin the services of a lawyer. The front end is built on react/redux and backend on Rails.',
    image: './images/screenshot.png',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'PLSQL',
      tech3: 'JavaScript',
      tech4: 'React/Redux',
    },
    livelink: 'https://book-a-lawyer-app.herokuapp.com',
    sourcelink: 'https://github.com/richardoppiyo/book-a-lawyer-app-frontend',
  },
  {
    id: 2,
    title: 'University of East African Baraton information Mangement System',
    name: 'University of Baraton',
    description: 'Management System',
    detail: 'The system automates most of the processes that you might think of in a University setting. Stusents are able log in to the system and carry out activities like selecting courses that they would have otherwise done manually. Lecturers and the management at large are able to see all student request in addditon to carrrying out adminstrative duties. The system is built on Java, Javascript, Html & CSS and heavily relies on PLSQL functions and triggers for functionalities',
    image: './images/ueab.png',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'PLSQL',
      tech3: 'JavaScript',
      tech4: 'Html & CSS',
    },
    livelink: 'https://demo.dewcis.com/ueab/',
    sourcelink: 'https://github.com/richardoppiyo/book-a-lawyer-App-backend',
  },
  {
    id: 3,
    title: 'Awesome Travels Summit Website ',
    name: 'Awesome Travels',
    description: 'Travel Sumit Website',
    detail: 'The Awesome Travel Summit Website give ingormation about the yearly travel agencies summit that hold in different parts of the World. The website is built purely on HTML, CSS AND Vanila JavaScript ',
    image: './images/awesometravels.png',
    technologies: {
      tech1: 'HTML',
      tech2: 'CSS',
      tech3: 'JavaScript',
    },
    livelink: 'https://richardoppiyo.github.io/awesome-travels/',
    sourcelink: 'https://github.com/richardoppiyo/awesome-travels',
  },
  {
    id: 4,
    title: 'Adventist University of Africa information Mangement System',
    name: 'Adventist Uni. of Africa',
    description: 'Management System',
    detail: 'The system automates most of the processes that you might think of in a University setting. Stusents are able log in to the system and carry out activities like selecting courses that they would have otherwise done manually. Lecturers and the management at large are able to see all student request in addditon to carrrying out adminstrative duties. The system is built on Java, Javascript, Html & CSS and heavily relies on PLSQL functions and triggers for functionalities',
    image: './images/aua.png',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'PLSQL',
      tech3: 'JavaScript',
      tech4: 'Html & CSS',
    },
    livelink: 'https://demo.dewcis.com/aua/',
    sourcelink: 'https://github.com/richardoppiyo/book-a-lawyer-App-backend',
  },
  {
    id: 5,
    title: 'Webpack To Do List',
    name: 'A To Do List',
    description: 'Web Application',
    detail: 'This is a simple web application built with webpack bundler that allows a user to add to dos in their schedule. they are able to mark them as complete and finnaly delete them at the end of a given period. The project is heavily powere by  JavaScript',
    image: './images/to-do-list.png',
    technologies: {
      tech1: 'Webpack bundler',
      tech2: 'HTML',
      tech3: 'CSS',
      tech4: 'JavaScript',
    },
    livelink: 'https://richardoppiyo.github.io/To_do_list_webpack/dist/',
    sourcelink: 'https://github.com/richardoppiyo/To_do_list_webpack',
  },
  {
    id: 6,
    title: 'Babcock University Information Mangement System',
    name: 'Babcock University',
    description: 'Management System',
    detail: 'The system automates most of the processes that you might think of in a University setting. Stusents are able log in to the system and carry out activities like selecting courses that they would have otherwise done manually. Lecturers and the management at large are able to see all student request in addditon to carrrying out adminstrative duties. The system is built on Java, Javascript, Html & CSS and heavily relies on PLSQL functions and triggers for functionalities',
    image: './images/babcock.png',
    technologies: {
      tech1: 'Ruby on rails',
      tech2: 'PLSQL',
      tech3: 'JavaScript',
      tech4: 'Html & CSS',
      tech5: 'Java',
    },
    livelink: 'https://demo.dewcis.com/babcock/',
    sourcelink: 'https://github.com/richardoppiyo/book-a-lawyer-App-backend',
  }
  // {
  //   id: 6,
  //   title: 'ICEA LION insurance Group',
  //   name: 'ICEA LION Insurance',
  //   description: 'ERP System',
  //   detail: 'The Insurance system is an entreprise resource planning system to manage and intergrate the company\'s financial in respect to travel Insurance. ERP system allows users to book and b The Insurance ERP system allows users to book and b ..The Insurance ERP system allows users to book and buy travel insurance online. Administrators are able to see all the insurance bought and approve them as necessary. The system is built on Java, Javascript, Html & CSS and heavily relies on PLSQL functions and triggers for functionalities',
  //   image: './images/icelion.png',
  //   technologies: {
  //     tech1: 'Ruby on rails',
  //     tech2: 'PLSQL',
  //     tech3: 'JavaScript',
  //     tech4: 'Html & CSS',
  //   },
  //   livelink: 'https://demo.dewcis.com/icealion/icealion',
  //   sourcelink: 'https://github.com/microverse-students/palindrome-richardoppiyo',
  // }
];

const containerPopUp = document.querySelector('#mobile-pop-up');

// To get the empty section to populate with the JS object
const container = document.querySelector('#container-div');

// To loop through my object elements and add them to the html section
projectList.forEach((item) => {
  const content = `
   <section id="container">
      <div class="container-image">
        <img class="item-image" src="${item.image}" alt="ueab-university" />
      </div>
      <div class="container-title">
        <h4>
          ${item.name} <br/>
          ${item.description}
        </h4>
      </div>
      <div class="container-projects">
        <ul class="container-projects-element">
          <li>${item.technologies.tech1}</li>
          <li>${item.technologies.tech2}</li>
          <li>${item.technologies.tech3}</li>
          <li>${item.technologies.tech4}</li>
        </ul>
      </div>
      <button onclick="createModal(${item.id})" class="container-btn" type="button" name="button">
        See Project
      </button>
    </section>`;
  container.innerHTML += content;
});

// handles the modal on button click
const createModal = (portfolioId) => { // eslint-disable-line no-unused-vars
  const portfolioArr = projectList.filter((portfolio) => portfolio.id === portfolioId);
  const [portfolioObj] = portfolioArr;

  containerPopUp.style.display = 'block';
  const content = `<div class="mobile-pop-up-container-image">
        <a onclick="closeModal()" id="modal-hiden-image">
        <img src="images/iconcancel.png" alt=""/></a>
      <img class="mobile-pop-up-item-image" src="${portfolioObj.image}" alt="ueab-university"/>
      </div>
      <div class="mobile-pop-up-container-title">
        <h2>${portfolioObj.title}</h2>
        <div class="hidden-mobile-button-pop-up">
          <button class="mobile-pop-up-container-btn" type="button" name="button">
            <a href="${portfolioObj.livelink}" target="_blank" rel="noopener noreferrer">See Live
          <i class="fab fa-github fa-sm modal-social"></i></a></button>
          <button class="mobile-pop-up-container-btn" type="button" name="button">
            <a href="./index.html" target="_blank">See Source
          <i class="fab fa-github fa-sm modal-social"></i></a></button>
        </div>
      </div>
      <div class="mobile-pop-up-container-projects">
        <ul class="mobile-pop-up-container-projects-element">
          <li>${portfolioObj.technologies.tech1}</li>
          <li>${portfolioObj.technologies.tech2}</li>
          <li>${portfolioObj.technologies.tech3}</li>
          <li>${portfolioObj.technologies.tech4}</li>
        </ul>
      </div>
      <div class="mobile-pop-up-text">
          <p>${portfolioObj.detail}</p>
      </div>
      <div class="mobile-button-pop-up">
        <button class="mobile-pop-up-container-btn" type="button" name="button">
          <a href="${portfolioObj.livelink}" target="_blank">See Live
        <i class="fab fa-github fa-sm modal-social"></i></a></button>
        <button class="mobile-pop-up-container-btn" type="button" name="button">
          <a href="./index.html" target="_blank">See Source
        <i class="fab fa-github fa-sm modal-social"></i></a></button>
    </div>`;
  containerPopUp.innerHTML = content;
};

// to close the modal
function closeModal() { // eslint-disable-line no-unused-vars
  containerPopUp.style.display = 'none';
}

// This function validates the email on the formspree
function ValidateEmail(inputText) {
  const mailformat = '.*[A-Z]+.*';
  if (!inputText.match(mailformat)) {
    document.getElementById('email-fail-id').style.display = 'none';
    return true;
  }
  document.getElementById('email-fail-id').style.display = 'flex';
  return false;
}

function myFunction(e) { // eslint-disable-line no-unused-vars
  if (!ValidateEmail(e.value)) {
    document.querySelector('.contact-form-btn').setAttribute('disabled', 'true');
  } else {
    document.querySelector('.contact-form-btn').removeAttribute('disabled', 'true');
  }
}

// To save form data in the local storage and retrive it on window load
const formEl = document.querySelector('#contact-form');
const userName = formEl.querySelector('#full-name');
const userEmail = formEl.querySelector('#email');
const userMesssage = formEl.querySelector('#message');

const saveData = () => {
  const formData = {
    name: userName.value,
    email: userEmail.value,
    message: userMesssage.value,
  };
  localStorage.setItem('sessionData', JSON.stringify(formData));
};

userName.addEventListener('input', saveData);
userEmail.addEventListener('input', saveData);
userMesssage.addEventListener('input', saveData);

window.addEventListener('load', () => {
  const serializeFormData = JSON.parse(localStorage.getItem('sessionData'));
  userName.value = serializeFormData.name;
  userEmail.value = serializeFormData.email;
  userMesssage.value = serializeFormData.message;
});
