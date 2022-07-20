//Selecting each tags to be styled
const menu = document.querySelector('#nav-links');
const menuBtn = document.querySelector("#menu-btn");
const cancelBtn = document.querySelector("#cancel-btn");


//menuBtn.style.display = 'none';
menuBtn.addEventListener(click, () => {
     menuBtn.classList.add('display-nav');
})