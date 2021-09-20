/*=========================== SHOW MENU ===========================*/
const showMenu = function(toggleId, navId) {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);
  if(toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('show-menu');
    })
  }
}
showMenu('nav-toggle','nav-menu');
/*=========================== REMOVE MENU MOBILE ===========================*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(function(item) {
  item.addEventListener('click', linkAction);
})
/*=========================== SCROLL ACTIVE LINK ===========================*/
const sections = document.querySelectorAll('section[id]');
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(function(current) {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - headerHeight,
          sectionId = current.getAttribute('id');
    if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll', scrollActive);

/*=========================== CHANGE BACKGROUND HEADER ===========================*/
function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 80)
    header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=========================== SCROLL UP SHOW ===========================*/
function scrollUpShow() {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 590)
    scrollUp.classList.add('scroll-up-show');
  else scrollUp.classList.remove('scroll-up-show');
}
window.addEventListener('scroll', scrollUpShow);

/*=========================== DARK/LIGHT THEME ===========================*/
const themeBtn = document.getElementById('theme-button');
const body = document.querySelector('body');
let light = true;
function darkLight() {
  if(light) {
    body.classList.add('dark-theme');
    themeBtn.classList.replace('bx-toggle-left','bx-toggle-right');
    light = !light;
  } else {
    body.classList.remove('dark-theme');
    themeBtn.classList.replace('bx-toggle-right','bx-toggle-left');
    light = !light; 
  }
}
themeBtn.addEventListener('click',darkLight)
