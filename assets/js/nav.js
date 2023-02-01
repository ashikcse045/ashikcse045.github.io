// SCRIPT FOR FLOATING NAVBAR
window.addEventListener('scroll', function(){
  let nav = document.querySelector('.header_navbar');
  nav.classList.toggle("sticky", window.scrollY > 490);
});

const toggoleBtn = document.querySelector('#toogleBtn');
$(document).ready(function() {
    $("#toogleBtn").click(function() {
      $("#nav_div").slideToggle("slow");
      
    });
  });
  
  