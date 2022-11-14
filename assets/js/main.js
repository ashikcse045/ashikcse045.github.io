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

//PROGRESS BAR ANIMATION
const progress_section = document.querySelector('.skill_box');

const progress_indicator = document.querySelectorAll('.indicator');

function showProgress(){
    progress_indicator.forEach(progressBar => {
        const value = progressBar.dataset.progress;

        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    })
}

function hideProgress()
{
    progress_indicator.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    })
}

window.addEventListener('scroll', () => {
    const selec_pos = progress_section.getBoundingClientRect().top;

    const screen_pos = window.innerHeight;

    if(selec_pos < screen_pos)
    {
        showProgress();
    }
    else{
        hideProgress();
    }
});