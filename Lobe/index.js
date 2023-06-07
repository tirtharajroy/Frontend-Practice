const toggleBtn = document.querySelector('.hamburger');
const toggleIcon = document.querySelector('.hamburger i');
const navUl = document.querySelector('.navbar ul');
const actionBtn = document.querySelector('.action-btn');

toggleBtn.addEventListener('click', function () {
    if (toggleIcon.classList.contains('fa-bars')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-times');
        toggleBtn.style.paddingLeft = '1.1rem';
        toggleBtn.style.paddingRight = '1.1rem';
        navUl.style.display = 'block';
        actionBtn.style.display = 'block';

    } else {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
        toggleBtn.style.paddingLeft = '0.96rem';
        toggleBtn.style.paddingRight = '0.96rem';
        navUl.style.display = '';
        actionBtn.style.display = '';
    }
});