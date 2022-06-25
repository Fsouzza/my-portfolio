/* =========== SHOW MENU ========== */
const menu = document.getElementById("nav-menu"), 
    navToggle = document.getElementById("nav-toggle"), 
    closeMenu = document.getElementById("nav-close")


/* =========== MENU ========== */
if (navToggle){
    navToggle.addEventListener('click', () => {
        menu.classList.add('show-menu');
    });
}


/* =========== CLOSE MENU ========== */
if (closeMenu){
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    });
};