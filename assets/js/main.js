// window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});


// SCRIPT FOR HIDE # IN URL
function hashHandler() {
    const loc = window.location.hash.split('#')[1];
    window.history.pushState({}, 'Page Title', '/' + loc);
}

window.addEventListener('hashchange', hashHandler, false);

// SCRIPT FOR FLOATING NAVBAR
window.addEventListener('scroll', function(){
    let nav = document.querySelector('.header_navbar');
    nav.classList.toggle("sticky", window.scrollY > 490);
});