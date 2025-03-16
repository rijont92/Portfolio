const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 80) {
//     navbar.style.backgroundColor = "rgba(9, 9, 23, 1)";
//   } else {
//     navbar.style.backgroundColor = "transparent";
//   }
// }



var typed = new Typed(".text",{
  strings: ["Frontend Developer" , "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
});



//3d

// const bannerImg = document.querySelector('.banner-img img');

// bannerImg.addEventListener('mousemove', (e) => {
//   const width = bannerImg.clientWidth;
//   const height = bannerImg.clientHeight;
//   const mouseX = e.offsetX;
//   const mouseY = e.offsetY;
//   const rotateY = ((mouseX / width) * 45) - 15; // Adjust the 30 value for more/less rotation
//   const rotateX = ((mouseY / height) * -45) + 15; // Adjust the 30 value for more/less rotation

//   bannerImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// });

// bannerImg.addEventListener('mouseleave', () => {
//   bannerImg.style.transform = 'rotateX(0deg) rotateY(0deg)';
// });


// // 3d


// document.querySelectorAll('.skills-col').forEach(col => {
//   col.addEventListener('mousemove', (e) => {
//     const width = col.clientWidth;
//     const height = col.clientHeight;
//     const mouseX = e.offsetX;
//     const mouseY = e.offsetY;
//     const rotateY = ((mouseX / width) * 60) - 15; 
//     const rotateX = ((mouseY / height) * -60) + 15; 

//     col.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   });

//   col.addEventListener('mouseleave', () => {
//     col.style.transform = 'rotateX(0deg) rotateY(0deg)';
//   });
// });





const date = new Date();
const year = date.getFullYear();

const yearSpan = document.getElementById("year");
yearSpan.innerHTML = year;

// Skills Slider
const skillsWrapper = document.querySelector('.skills-wrapper');
const prevButton = document.getElementById('prevSkills');
const nextButton = document.getElementById('nextSkills');
const skillBoxes = document.querySelectorAll('.skills-col');
let currentPosition = 0;

function getVisibleBoxes() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1200) return 2;
  return 3;
}

function getBoxWidth() {
  const container = skillsWrapper.parentElement;
  const containerWidth = container.offsetWidth - (parseInt(window.getComputedStyle(container).paddingLeft) * 2);
  const gap = parseInt(window.getComputedStyle(skillsWrapper).gap) || 80;
  const visibleBoxes = getVisibleBoxes();
  
  // Calculate box width based on container width and gaps
  return (containerWidth - (gap * (visibleBoxes - 1))) / visibleBoxes;
}

function updateSliderButtons() {
  const visibleBoxes = getVisibleBoxes();
  const maxIndex = skillBoxes.length - visibleBoxes;
  const currentIndex = Math.round(currentPosition / (getBoxWidth() + parseInt(window.getComputedStyle(skillsWrapper).gap)));
  
  prevButton.disabled = currentIndex <= 0;
  nextButton.disabled = currentIndex >= maxIndex;
}

function moveSlide(direction) {
  const boxWidth = getBoxWidth();
  const gap = parseInt(window.getComputedStyle(skillsWrapper).gap) || 80;
  const moveAmount = boxWidth + gap;
  const visibleBoxes = getVisibleBoxes();
  const maxScroll = (skillBoxes.length - visibleBoxes) * moveAmount;
  
  currentPosition = Math.max(0, Math.min(currentPosition + (direction * moveAmount), maxScroll));
  skillsWrapper.style.transform = `translateX(-${currentPosition}px)`;
  updateSliderButtons();
}

prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

// Initialize slider
function initializeSlider() {
  const boxWidth = getBoxWidth();
  
  // Set width for each box
  skillBoxes.forEach(box => {
    box.style.width = `${boxWidth}px`;
  });
  
  // Reset position
  currentPosition = 0;
  skillsWrapper.style.transform = 'translateX(0)';
  updateSliderButtons();
}

// Initialize on load
initializeSlider();

// Update on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initializeSlider, 100);
});
