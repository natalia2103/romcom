// Create variables targetting the relevant DOM elements here 👇
// These target the book cover
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var firstTagline = document.querySelector(".tagline-1");
var secondTagline = document.querySelector(".tagline-2");


// The buttons!
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewCoverButton = document.querySelector('.make-new-button');

// different page views
var homePage = document.querySelector('.home-view');
var savedPage = document.querySelector('.saved-view');
var makeNewCoverPage = document.querySelector('.form-view')



// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


var currentCover = new Cover()


// Add your event listeners here 👇

window.addEventListener('load', randomizeCover);
randomCoverButton.addEventListener('click', randomizeCover);
makeNewCoverButton.addEventListener('click', createCoverDisplay)



// Create your event handlers and other functions here 👇

//  Will need to utilize CSS features so that when the button for "make cover" is clicked, It will hide the
// -homepage
// -the "Save cover" button
// -and "new random cover" button.

// The form to make a new cover should be visable


// function createRandomCover() {
//   var currentCover = new Cover(cover[getRandomIndex(covers)],title[getRandomIndex(titles)],
// tagline1[getRandomIndex(descriptors)], tagline2[getRandomIndex(descriptors)]);
//   displayCover();
// }
//
//
// function displayCover() {
//   var coverImage.src = covers[index],
//   var coverTitle.innerText = titles[index],
//   var firstTagline.innerText = descriptors[index],
//   var secondTagline.innerText = descriptors[index],
// }
function randomizeCover() {
  changeCoverImage();
  changeTitle();
  changeFirstDescriptor();
  changeSecondDescriptor();
}


function changeCoverImage() {
  var index = getRandomIndex(covers);
  coverImage.src = covers[index];
  currentCover.cover = covers[index];
}

function changeTitle() {
  var index = getRandomIndex(titles);
  coverTitle.innerHTML = titles[index];
  currentCover.title = titles[index];
}

function changeFirstDescriptor() {
  var index = getRandomIndex(descriptors);
  firstTagline.innerHTML = descriptors[index];
  currentCover.tagline1 = descriptors[index];
}

function changeSecondDescriptor() {
  var index = getRandomIndex(descriptors);
  secondTagline.innerHTML = descriptors[index];
  currentCover.tagline2 = descriptors[index];
}


// Need to create a funtion createCoverDisplay
// This function will run in the event listener "makeNewCoverButton"
// this function will hold the buttons I want to hide (save cover and show new random)
// and also the button I need to add (home)
// I need to hide the home home page
// and display the page with the form to make a new cover
function createCoverDisplay() {
  homeButton.classList.add();
  saveCoverButton.classList.remove();
  randomCoverButton.classList.remove();
  makeNewCoverPage.classList.add();
  homePage.classList.remove();
}
console.log(createCoverDisplay)


// // We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
