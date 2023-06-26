/* Menu Popup */

const menuBar = document.querySelector('#menu-bar');
const cancelIcon = document.querySelector('#cancel-icon');
const topNav = document.querySelector('.mobileLinks');
const mobLink = document.querySelector('#mob-link');

// function showMenuFunction() {
//   if (topNav.style.display === 'none') {
//     topNav.style.display = ('block');
//   } else {
//     topNav.style.display = ('none');
//   }
// }

function hideMenuFunction() {
  if (topNav.style.display === 'block') {
    topNav.style.display = ('none');
  } else {
    topNav.style.display = ('block');
  }
}
menuBar.addEventListener('click', showMenuFunction);
cancelIcon.addEventListener('click', hideMenuFunction);
mobLink.addEventListener('click', () => { topNav.style.display = 'none'; });

/* Details popup window */

// const projects = [
//   {
//     name: 'Project 1',
//     description: 'Description of Project 1',
//     image: 'images/Img Placeholder.png',
//     technologies: ['HTML', 'CSS', 'Javascript'],
//     liveLink: 'https://example.com/project1',
//     sourceLink: 'https://github.com/example/project1',
//   },
//   {
//     name: 'Project 2',
//     description: 'Description of Project 2',
//     image: 'images/Img Placeholder (3).png',
//     technologies: ['HTML', 'CSS', 'Javascript'],
//     liveLink: 'https://example.com/project2',
//     sourceLink: 'https://github.com/example/project2',
//   },
//   {
//     name: 'Project 3',
//     description: 'Description of Project 3',
//     image: 'images/Img Placeholder (3).png',
//     technologies: ['HTML', 'CSS', 'Javascript'],
//     liveLink: 'https://example.com/project3',
//     sourceLink: 'https://github.com/example/project3',
//   },
//   {
//     name: 'Project 4',
//     description: 'Description of Project 4',
//     image: 'images/Img Placeholder (2).png',
//     technologies: ['HTML', 'CSS', 'Javascript'],
//     liveLink: 'https://example.com/project4',
//     sourceLink: 'https://github.com/example/project4',
//   },
//   {
//     name: 'Project 5',
//     description: 'Description of Project 5',
//     image: 'images/Img Placeholder (4).png',
//     technologies: ['HTML', 'CSS', 'Javascript'],
//     liveLink: 'https://example.com/project5',
//     sourceLink: 'https://github.com/example/project5',
//   },
//   {
//     name: 'Project 6',
//     description: 'Description of Project 6',
//     image: 'images/Img Placeholder (3).png',
//     technologies: ['HTML', 'CSS', 'Javascript'],
//     liveLink: 'https://example.com/project6',
//     sourceLink: 'https://github.com/example/project6',
//   },
//   {
//     name: 'Project 7',
//     description: 'Description of Project 7',
//     image: 'images/Img Placeholder (2).png',
//     technologies: ['HTML', 'CSS', 'Javascript'],
//     liveLink: 'https://example.com/project7',
//     sourceLink: 'https://github.com/example/project7',
//   },
// ];

// const projectsContainer = document.getElementById('work-container');
// const popup = document.getElementById('popup');
// const closeBtn = document.getElementById('close-btn');
// const popupTitle = document.getElementById('popup-title');
// const popupDescription = document.getElementById('popup-description');
// const popupImage = document.getElementById('popup-image');
// const popupTechnologies = document.getElementById('popup-technologies');
// const liveLink = document.getElementById('live-link');
// const sourceLink = document.getElementById('source-link');

// // // Function to create project cards dynamically
// // function createProjectCard(project) {
// //   const card = document.createElement('div');
// //   card.classList.add('project-card');
// //   card.innerHTML = `
// //     <img src="${project.image}" alt="Project Image">
// //     <h3>${project.name}</h3>
// //     <button class="details-btn">Details</button>
// //   `;
// //   return card;
// // }

// // Function to show project details in the popup
// function showProjectDetails(project) {
//   popupTitle.textContent = project.name;
//   popupDescription.textContent = project.description;
//   popupImage.src = project.image;
//   popupTechnologies.textContent = `Technologies: ${project.technologies}`;
//   liveLink.href = project.liveLink;
//   sourceLink.href = project.sourceLink;

//   popup.style.display = 'block';
// }

// // Function to hide the popup
// function hidePopup() {
//   popup.style.display = 'none';
// }

// // Event listener for details button click
// projectsContainer.addEventListener('click', (event) => {
//   if (event.target.classList.contains('showcase-btn')) {
//     const projectIndex = event.target.parentElement.getAttribute('data-index');
//     const project = projects[projectIndex];
//     showProjectDetails(project);
//   }
// });

// // Event listener for close button click
// closeBtn.addEventListener('click', hidePopup);

// // Render project cards
// projects.forEach((project, index) => {
//   const showCase = document.getElementById('showcase');
//   project = showCase;
//   showCase.setAttribute('data-index', index);
//   // const card = createProjectCard(project);
//   // card.setAttribute('data-index', index);
//   // projectsContainer.appendChild(card);
// });
