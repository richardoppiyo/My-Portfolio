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
];

// To get the empty section
const container = document.querySelector("#container-div");

// To loop through my object elements
projectList.forEach((item) => {
  console.log(item);
  console.log(container);
  // container.classList.add('container');
  const cardElement1 = document.createElement("div");
  container.appendChild(cardElement1);
  cardElement1.classList.add("container-image");
  cardElement1.innerHTML.src = "images/icon-languages.png";
  // cardElement1.img.src = item[];

  //cardElement1.innerHTML = "<img src="" alt=""/>";

  const cardElement2 = document.createElement("div");
  container.appendChild(cardElement2);
  cardElement2.classList.add("container-title");
  cardElement2.innerHTML = "<h4> hello</h4>";

  const cardElement3 = document.createElement("div");
  container.appendChild(cardElement3);
  cardElement3.classList.add("container-projects");
  cardElement2.innerHTML = "<ul>hi</ul>";

  // container.classList.add('container');
  container.appendChild.innerHTML = cardElement1;
});
