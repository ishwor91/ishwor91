const hamburger = document.querySelector(".header-menu");
const navMenu = document.querySelector(".header");
let rightSocial = document.querySelector('.social-right')
const toggleNavbar = () => {
    navMenu.classList.toggle('active');
    // hamburger.classList.toggle('active');
    // rightSocial.classList.toogle('active');


};



hamburger.addEventListener("click", () => toggleNavbar()); 
// navMenu.addEventListener("click", () => toggleNavbar());

