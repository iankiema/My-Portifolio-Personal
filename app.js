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
const mainData = {
  id: '0',
  image: 'images/Img Placeholder (3).png',
  alt: 'project image',
  title: 'Multistories',
  content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technologies: ['Html', 'Bootstrap', 'Ruby'],
  buttonContent: 'See project',
};

const mainProject = document.getElementById('main-project');
const technologiesList = document.createElement('ul');
const technologies = ['HTML', 'Bootstrap', 'Ruby'];
technologies.forEach((technology) => {
  const technologyItem = document.createElement('li');
  technologyItem.textContent = technology;
  technologiesList.appendChild(technologyItem);
});

const mainImg = document.createElement('div');
mainImg.classList.add('main-img');
const mainImage = document.createElement('img');
mainImage.classList.add('main-Image');
mainImage.src = 'images/Img Placeholder.png';
mainImg.appendChild(mainImage);
const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
const mainTitle = document.createElement('h2');
mainTitle.classList.add('main-title');
mainContent.classList.add('main-content');
mainTitle.textContent = 'Multi Post Stories';
const mainParag = document.createElement('p');
mainParag.classList.add('main-parag');
mainParag.textContent = mainData.content;

const mainList = document.createElement('ul');
mainList.classList.add('main-list');
mainList.appendChild(technologiesList);
const mainAnchor = document.createElement('a');
const mainButton = document.createElement('button');
mainButton.classList.add('main-btn');
mainButton.id = 'showcase-button';
mainButton.textContent = 'See Project';
mainAnchor.appendChild(mainButton);

mainContent.appendChild(mainTitle);
mainContent.appendChild(mainParag);
mainContent.appendChild(mainList);
mainContent.appendChild(mainAnchor);

mainProject.appendChild(mainImg);
mainProject.appendChild(mainContent);

const projectData = [
  {
    id: '1',
    image: 'images/Img Placeholder (3).png',
    alt: 'project image',
    title: 'Professional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    buttonContent: 'See project',
  },
  {
    id: '2',
    image: 'images/Img Placeholder (2).png',
    alt: 'project image',
    title: 'Professional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    buttonContent: 'See project',
  },
  {
    id: '3',
    image: 'images/Img Placeholder (2).png',
    alt: 'project image',
    title: 'Professional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    buttonContent: 'See project',
  },
  {
    id: '4',
    image: 'images/Img Placeholder (4).png',
    alt: 'project image',
    title: 'Professional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    buttonContent: 'See project',
  },
  {
    id: '5',
    image: 'images/Img Placeholder (3).png',
    alt: 'project image',
    title: 'Professional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    buttonContent: 'See project',
  },
  {
    id: '6',
    image: 'images/Img Placeholder (2).png',
    alt: 'project image',
    title: 'Professional Art Printing Data',
    content: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    buttonContent: 'See project',
  },
];

const projectsSection = document.getElementById('project-container');

projectData.forEach((project, index) => {
  const showcaseDiv = document.createElement('div');
  showcaseDiv.classList.add('showcase');
  showcaseDiv.id = 'showcase';

  const imageDiv = document.createElement('div');
  imageDiv.classList.add('showcase-image');

  const image = document.createElement('img');
  image.src = project.image;
  image.alt = project.alt;
  imageDiv.appendChild(image);

  const detailDiv = document.createElement('div');
  detailDiv.classList.add('showcase-detail');

  const title = document.createElement('h2');
  title.textContent = project.title;

  const description = document.createElement('p');
  description.textContent = project.content;

  detailDiv.appendChild(title);
  detailDiv.appendChild(description);
  detailDiv.appendChild(technologiesList);

  const button = document.createElement('button');
  button.id = 'showcase-button';
  button.classList.add('showcase-btn');
  button.type = 'button';
  button.dataset.index = index.toString();
  button.textContent = project.buttonContent;

  showcaseDiv.appendChild(imageDiv);
  showcaseDiv.appendChild(detailDiv);
  showcaseDiv.appendChild(button);

  projectsSection.appendChild(showcaseDiv);
});

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
const popupContent = document.createElement('div');
popupContent.classList.add('popup-content');
popupContent.id = 'popup-content';
const popupHeader = document.createElement('div');
popupHeader.classList.add('popup-header');
const btnClose = document.createElement('button');
btnClose.classList.add('close-btn');
btnClose.textContent = '';
const btnCloseImage = document.createElement('img');
btnCloseImage.src = 'images/cancelBtn.svg';
btnClose.appendChild(btnCloseImage);
const titleOne = document.createElement('h2');
titleOne.id = 'popup-title';
const titleTwo = document.createElement('h2');
titleTwo.id = 'popup-title2';
const popupUl = document.createElement('ul');
popupHeader.appendChild(btnClose);
popupHeader.appendChild(titleOne);
popupHeader.appendChild(titleTwo);
popupHeader.appendChild(popupUl);

const popupBody = document.createElement('div');
popupBody.classList.add('popup-body');
const popupImg = document.createElement('div');
popupImg.classList.add('popoup-img');
const popImage = document.createElement('img');
popImage.classList.add('popup-image');
popImage.id = 'popup-image';
popImage.alt = 'Project Image';
popupImg.appendChild(popImage);

const popupDescLink = document.createElement('div');
popupDescLink.classList.add('popup-desclink');
const popupDesc = document.createElement('div');
popupDesc.classList.add = 'popup-desc';
const popupDescriptions = document.createElement('p');
popupDescriptions.id = 'popup-description';
popupDesc.appendChild(popupDescriptions);

const popupLinks = document.createElement('div');
popupLinks.classList = 'popoup-links';
popupLinks.id = 'popup-links';
popupLinks.classList.add('popup-links');
const liveLinks = document.createElement('a');
liveLinks.id = 'live-link';
liveLinks.target = '_blank';
liveLinks.textContent = 'Live Version';
const linkImageOne = document.createElement('img');
linkImageOne.classList.add('link-img-one');
linkImageOne.src = 'images/Icon -GitHub.svg';
liveLinks.appendChild(linkImageOne);
const sourceLinks = document.createElement('a');
sourceLinks.id = 'source-link';
sourceLinks.target = '_blank';
sourceLinks.textContent = 'See Source';
const sourceLinkImage = document.createElement('img');
sourceLinkImage.classList.add('link-img-one');
sourceLinkImage.src = 'images/Icon-see live.svg';
sourceLinks.appendChild(sourceLinkImage);

popupLinks.appendChild(liveLinks);
popupLinks.appendChild(sourceLinks);
popupDescLink.appendChild(popupDesc);
popupDescLink.appendChild(popupLinks);

popupBody.appendChild(popupImg);
popupBody.appendChild(popupDescLink);
popupContent.appendChild(popupHeader);
popupContent.appendChild(popupBody);
popup.appendChild(popupContent);

function handleClick() {
  const index = parseInt(this.dataset.index, 10);
  const element = projects[index];

  // Function to show project details in the popup
  titleOne.textContent = element.name;
  titleTwo.textContent = element.name2;
  popImage.src = element.image;
  popupDescriptions.textContent = element.description;
  liveLinks.href = element.liveLink;
  sourceLinks.href = element.sourceLink;
  element.technologies.forEach((technology) => {
    const technologyLi = document.createElement('li');
    technologyLi.textContent = technology;
    popupUl.appendChild(technologyLi);
  });

  popup.style.display = 'block';
}

showCaseBtns.forEach((showCaseBtn) => {
  showCaseBtn.addEventListener('click', handleClick);
});

btnClose.addEventListener('click', () => {
  popup.style.display = 'none';
});
