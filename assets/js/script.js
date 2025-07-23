const toggle = document.getElementById('mobile-toggle');
const menu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-slide').forEach(el => {
        setTimeout(() => el.classList.add('show'), 100);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');

    function setActiveLink(e) {
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    }

    links.forEach(link => link.addEventListener('click', setActiveLink));
});

window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.style.transition = 'opacity 0.4s ease';
        setTimeout(() => loader.remove(), 500);
    }
});

