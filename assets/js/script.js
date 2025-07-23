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