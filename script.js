const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navLinks.forEach(navLink => {
    navLink.classList.toggle("active");
  });
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navLinks.forEach(navLink => {
    navLink.classList.remove("active");
  });
}));


let footerDate = document.querySelector('.date');
let date = new Date();
let year = date.getFullYear();


footerDate.textContent = year;


let nums = document.querySelectorAll(".num");
let section = document.querySelector(".for-counter-up");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop * .7) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const ButtonToTop = document.querySelector("#to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 450) {
        ButtonToTop.classList.add("active");
    } else {
        ButtonToTop.classList.remove("active");
    }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}


const swiper = new Swiper('.swiperFirst', {
  slidesPerView: 1,
  spaceBetween: 1,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let rotateBtns = document.querySelectorAll('.rotate-card-btn');



rotateBtns.forEach(rotateBtn => rotateBtn.addEventListener('click', () => {
  let card = rotateBtn.parentElement.parentElement;
  card.classList.add('active');
  setTimeout(() => {
    card.classList.remove('active');
  }, 5000);
}));


const swiperSec = new Swiper('.swiperSecond', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperThird = new Swiper('.swiper-third', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('active');
      }
    });
    question.classList.toggle('active');
  });
});


var swiperFour = new Swiper(".swiperFour", {
  effect: "cards",
  grabCursor: true,
});



