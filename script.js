// wait until the DOM is fully loaded 

document.addEventListener('DOMContentLoaded' , function(){

    // Get DOM ELEMENT 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-Menu');

hamburger.addEventListener('click' , function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});



});

