const hamburg = document.getElementById('hamburg');
const nav = document.getElementById('nav');

hamburg.addEventListener('click', function () {
    if (hamburg.classList.contains('fa-bars')) {
        hamburg.classList.remove('fa-bars');
        hamburg.classList.add('fa-times');
        nav.style.display = 'flex';
    } else {
        hamburg.classList.remove('fa-times');
        hamburg.classList.add('fa-bars');
        nav.style.display = 'none';
    }
});