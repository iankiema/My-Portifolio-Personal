/* eslint-disable prefer-destructuring */
/* Menu Popup */

const menuBar = document.querySelector('#menu-bar');
const cancelIcon = document.querySelector('#cancel-icon');
const topNav = document.querySelector('.mobileLinks');
const mobLink = document.querySelector('#mob-link');

function showMenuFunction() {
  if (topNav.style.display === 'none') {
    topNav.style.display = ('block');
  } else {
    topNav.style.display = ('none');
  }
}

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

const projects = [
  {
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/example/project1',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/example/project2',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://example.com/project3',
    sourceLink: 'https://github.com/example/project3',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s \n Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://example.com/project4',
    sourceLink: 'https://github.com/example/project4',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://example.com/project5',
    sourceLink: 'https://github.com/example/project5',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://example.com/project6',
    sourceLink: 'https://github.com/example/project6',
  },
  {
    name: 'Keeping track of hundreds  of components website',
    name2: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://example.com/project7',
    sourceLink: 'https://github.com/example/project7',
  },
];

const showCaseBtns = document.querySelectorAll('#showcase-button');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');
const popupTitle = document.getElementById('popup-title');
const popupTitle2 = document.getElementById('popup-title2');
const popupDescription = document.getElementById('popup-description');
const popupImage = document.getElementById('popup-image');
const popupTechnologiesOne = document.getElementById('popup-technologies-one');
const popupTechnologiesTwo = document.getElementById('popup-technologies-two');
const popupTechnologiesThree = document.getElementById('popup-technologies-three');
const liveLink = document.getElementById('live-link');
const sourceLink = document.getElementById('source-link');

showCaseBtns.forEach((showCaseBtn) => {
  // eslint-disable-next-line func-names
  showCaseBtn.addEventListener('click', function () {
    const index = parseInt(this.getAttribute('data-index'), 10);
    const element = projects[index];

    // Function to show project details in the popup
    popupTitle.textContent = element.name;
    popupTitle2.textContent = element.name2;
    popupDescription.textContent = element.description;
    popupImage.src = element.image;
    // eslint-disable-next-line prefer-destructuring
    popupTechnologiesOne.textContent = element.technologies[0];
    popupTechnologiesTwo.textContent = element.technologies[1];
    popupTechnologiesThree.textContent = element.technologies[2];
    liveLink.href = element.liveLink;
    sourceLink.href = element.sourceLink;

    popup.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
