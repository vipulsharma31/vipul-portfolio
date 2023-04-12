let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');


heading = document.querySelector('.text');

let text = 'More Profit...';
let texts = ['Profit ...','Customers ...','Revenue ...','Sales ...']

let i = 1;
isForwards = true;
textCount = 0;

setInterval(function(){
  heading.textContent = texts[textCount].substring(0,i);
  if (isForwards){
    i++;
  }
  else {
    i--;
  }
  if(i > text.length + 10) {
    isForwards = false;
  }
  if(i<0){
    isForwards = true;
    textCount++;
  }
  if(textCount > texts.length-1) {
    textCount = 0;
  }
},100)

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};


var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

document.getElementById("home-button").addEventListener("click", function() {
   document.getElementById("home-section").scrollIntoView({behavior: "smooth"});
 });
 



