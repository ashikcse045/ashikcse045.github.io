// window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});

function hashHandler() {
    const loc = window.location.hash.split('#')[1];
    window.history.pushState({}, 'Page Title', '/' + loc);
}

window.addEventListener('hashchange', hashHandler, false);