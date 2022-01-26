const btn = document.querySelector(".humb");
const navLink = document.querySelector("#app-header-menu");
const closeButton = document.querySelector("#humb-cancelor");
const toclose = document.querySelectorAll(".nav-link");
const menuheader = document.querySelector("#app-header-info");

// To open the menu bar
function display() {
  navLink.classList.add("app-header-menu-visible");
  const menu = document.querySelector("#welcome");
  menu.classList.add("welcome-invisible");
  btn.classList.add("humb-invisible");
  closeButton.classList.add("humb-cancel-visible");
  menuheader.classList.add("app-header-hide");
}

// To close the menu bar
function close() {
  navLink.classList.remove("app-header-menu-visible");
  const menu = document.querySelector("#welcome");
  menu.classList.remove("welcome-invisible");
  btn.classList.remove("humb-invisible");
  closeButton.classList.remove("humb-cancel-visible");
  menuheader.classList.remove("app-header-hide");
}

// Adding event Listener humburger menu and the close icon
btn.addEventListener("click", display);
closeButton.addEventListener("click", close);

// Iterates over the list menu anchor tags and listens to click event
toclose.forEach((item) => {
  item.addEventListener("click", close);
});

// creating the Javascript Object to hold the card information
const projectList = [
  {
    name: "Multi-Post Stories 1",
    description: "Gain+Glory",
    image: "images/ueab.png",
    technologies: {
      tech1: "Ruby on rails",
      tech2: "CSS",
      tech3: "JavaScript",
      tech4: "Html",
    },
    "link to live version": "https://demo.dewcis.com/ueab/",
    "link to source":
      "https://github.com/microverse-students/palindrome-richardoppiyo",
  },
  {
    name: "Multi-Post Stories 2",
    description: "Gain+Glory",
    image: "images/ueab.png",
    technologies: {
      tech1: "Ruby on rails",
      tech2: "CSS",
      tech3: "JavaScript",
      tech4: "Html",
    },
    "link to live version": "https://demo.dewcis.com/ueab/",
    "link to source":
      "https://github.com/microverse-students/palindrome-richardoppiyo",
  },
  {
    name: "Multi-Post Stories 3",
    description: "Gain+Glory",
    image: "images/ueab.png",
    technologies: {
      tech1: "Ruby on rails",
      tech2: "CSS",
      tech3: "JavaScript",
      tech4: "Html",
    },
    "link to live version": "https://demo.dewcis.com/ueab/",
    "link to source":
      "https://github.com/microverse-students/palindrome-richardoppiyo",
  },
  {
    name: "Multi-Post Stories 4",
    description: "Gain+Glory",
    image: "images/ueab.png",
    technologies: {
      tech1: "Ruby on rails",
      tech2: "CSS",
      tech3: "JavaScript",
      tech4: "Html",
    },
    "link to live version": "https://demo.dewcis.com/ueab/",
    "link to source":
      "https://github.com/microverse-students/palindrome-richardoppiyo",
  },
  {
    name: "Multi-Post Stories 4",
    description: "Gain+Glory",
    image: "images/ueab.png",
    technologies: {
      tech1: "Ruby on rails",
      tech2: "CSS",
      tech3: "JavaScript",
      tech4: "Html",
    },
    "link to live version": "https://demo.dewcis.com/ueab/",
    "link to source":
      "https://github.com/microverse-students/palindrome-richardoppiyo",
  },
  {
    name: "Multi-Post Stories 4",
    description: "Gain+Glory",
    image: "images/ueab.png",
    technologies: {
      tech1: "Ruby on rails",
      tech2: "CSS",
      tech3: "JavaScript",
      tech4: "Html",
    },
    "link to live version": "https://demo.dewcis.com/ueab/",
    "link to source":
      "https://github.com/microverse-students/palindrome-richardoppiyo",
  }
];

// To get the empty section to populate with the JS object
const container = document.querySelector("#container-div");

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
      <button onclick='CreateModal()' class="container-btn" type="button" name="button">
        See Project
      </button>
    </section> `

  container.innerHTML += content;
});


const containerPopUp = document.querySelector("#mobile-pop-up");

function CreateModal(){

 // containerPopUp.classList.add("mobile-pop-up-visible");

  const  content =
    `<div class="mobile-pop-up-container-image">
      <img class="mobile-pop-up-item-image" src="" alt="ueab-university" />
      </div>
      <div class="mobile-pop-up-container-title">
        <h2>Keeping track of hundreds of components</h2>
      </div>
      <div class="mobile-pop-up-container-projects">
        <ul class="container-projects-element">
          <li>Trial A</li>
          <li>Trial B</li>
          <li>Trial C</li>
          <li>Trial D</li>
        </ul>
      </div>
      <div class="mobile-pop-up-text">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
      </div>
      <div class="mobile-button-pop-up">
        <button class="mobile-pop-up-container-btn" type="button" name="button">
          See Live
        <i class="fab fa-github fa-sm social"></i></button>
        <button class="mobile-pop-up-container-btn" type="button" name="button">
          See Source
        <i class="fab fa-github fa-sm social"></i></button>
    </div>`


   containerPopUp.innerHTML = content;
}

// console.log(containerPopUp);
