let toggleBtn = document.querySelector('.hamburger i');
let navUl = document.querySelector('.navbar ul');

toggleBtn.addEventListener('click', function () {
    if (toggleBtn.classList.contains('fa-bars')) {
        toggleBtn.classList.remove('fa-bars');
        toggleBtn.classList.add('fa-times');
        navUl.style.display = 'block';
    } else {
        toggleBtn.classList.remove('fa-times');
        toggleBtn.classList.add('fa-bars');
        navUl.style.display = '';
    }
});