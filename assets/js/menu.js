/* ----------- MENU -------------*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu');




/* ----------- REMOVE E ATIVA LINK DO MENU MOBILE -------------*/
const navMenu = document.getElementById('nav-menu');
const listaID = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    const listaID = document.querySelectorAll('.nav__link');

    listaID.forEach((item) =>
	item.classList.remove('active-link'));
	this.classList.add('active-link');
    
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}


listaID.forEach((item) =>
item.addEventListener('click', linkAction));



/* ----------- CHANGE BACKGROUND HEADER -------------*/
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);