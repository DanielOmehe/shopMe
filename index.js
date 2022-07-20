const navMenu = document.querySelector('.nav-menu');
const menuBtn = document.getElementById('menu-btn');
const cancelBtn = document.getElementById('cancel-btn');
const subMenu = document.querySelector('.submenu');
const navLink = document.querySelector('nav-links');

const openSubMenu = false;
menuBtn.onclick = () =>{
     navMenu.classList.add('open');
}

cancelBtn.onclick = () => {
     navMenu.classList.remove('open');
}

/*navLink.onhover = () =>{
     subMenu.classList.add('open')
}


document.querySelectorAll('.nav-links').forEach((n)=> {
     n.addEventListener('click', () => {
          document.querySelectorAll('.submenu').forEach((n) =>{
               n.classList.add('open');
               n.classList.remove('open');
          })
     })
})*/