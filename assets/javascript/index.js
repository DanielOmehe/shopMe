//selectinh each elemnt from the DOM
const  hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector(".navbar");
//const menuList = document.querySelector('.menu-list');

//Adding an EventListener to the hamburger menu which open a menu when clicked on by the user 
hamburgerMenu.addEventListener('click', () => {
     hamburgerMenu.classList.toggle('open');
     navMenu.classList.toggle('open');
     //menuList.classList.toggle('active');
});


document.querySelectorAll('nav-links').forEach(n => n.addEventListener('click', () => {
     hamburgerMenu.classList.remove('open');
     navMenu.classList.remove('open');
}))


//adding a scroll event which creates a fixed anavigation bar when the uswer scrolls the page
window.onscroll = () => { 
     this.scrollY > 50 ? navBar.classList.add("scroll") : navBar.classList.remove("scroll");
}