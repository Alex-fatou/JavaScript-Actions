const slides = document.getElementsByClassName("slider");
let activeSlide = 0;
let interval;
let slideTime = 2000; 

function setSlide(activeIndex) {
  if (activeIndex < 0) {
    activeSlide = slides.length - 1; 
  } else if (activeIndex >= slides.length) {
    activeSlide = 0; 
  } else {
    activeSlide = activeIndex;
  }

  for (let index = 0; index < slides.length; index++) {
    if (index === activeSlide) {
      slides[index].classList.remove("displayNone");
      slides[index].classList.add("displayBlock");
    } else {
      slides[index].classList.add("displayNone");
      slides[index].classList.remove("displayBlock");
    }
  }
}

// previus - next buttons 
function setPreviousSlide() {
  clearInterval(interval);
  setSlide(activeSlide - 1);
}

function setNextSlide() {
  clearInterval(interval);
  setSlide(activeSlide + 1);
}

// start - stop loop buttons 
function startLoop() {
  clearInterval(interval); 
  interval = setInterval(() => {
    setSlide(activeSlide + 1);
  }, slideTime);
}

function stopLoop() {
  clearInterval(interval);
}

// add manaul time 
function updateInterval() {
  const inputVal = document.getElementById("slideInterval").value;
  slideTime = parseInt(inputVal); 

  startLoop(); 
}

startLoop();
