// wait until the DOM is fully loaded 

document.addEventListener('DOMContentLoaded' , function(){

    // Get DOM ELEMENT 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click' , function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Handle window resize: auto-close mobile menu on desktop view

window.addEventListener('resize' , function(){
    if (this.window.innerWidth > 768){
        // on desktop , ensure menu is visible and hambugger is reset

        navMenu.classList.remove('active')
        hamburger.classList.remove('active')

    };
});



});

