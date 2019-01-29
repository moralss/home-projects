const menuBtn = document.querySelector(".menu-btn");
console.log("menuBtn", menuBtn);

const navList = document.querySelectorAll(".nav__list");
const navBar = document.querySelector(".nav");

console.log(navBar);

let showMenu = false;

menuBtn.addEventListener("click", toggleNav);


function toggleNav() {
    if (!showMenu) {
        navList.forEach(element => {
            element.classList.add('show');
        });

        navBar.classList.add('sidebar');
        
        // navBar.classList.remove("nav");
        showMenu = true;
    }
    
    else {
        navList.forEach(element => {
            element.classList.remove("show");
        });
        // navBar.classList.
        navBar.classList.remove('sidebar');

        showMenu = false;

    }
}