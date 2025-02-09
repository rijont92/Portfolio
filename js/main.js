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
