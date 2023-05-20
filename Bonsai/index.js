const navBtn = document.querySelector('.nav-icon');
const navOne = document.querySelector('nav > ul:nth-child(2)');
const navTwo = document.querySelector('nav > ul:nth-child(3)');

navBtn.addEventListener('click', () => {
    if (navBtn.classList.contains('fa-ellipsis-h')){
        navBtn.classList.remove('fa-ellipsis-h');
        navBtn.classList.add('fa-times');
        navOne.style.display = 'flex';
        navTwo.style.display = 'flex';
    }
    else {
        navBtn.classList.remove('fa-times');
        navBtn.classList.add('fa-ellipsis-h');
        navOne.style.display = 'none';
        if (document.documentElement.clientWidth < 512) {
            navTwo.style.display = 'none';
        }
    }
});

const subMenus = document.querySelectorAll('.submenu');

function open1() {
    if (document.documentElement.clientWidth > 512) {
        if (subMenus[1].style.display == 'block') {
            subMenus[1].style.display = 'none';
        }
        if (subMenus[0].style.display == 'block') {
            subMenus[0].style.display = 'none';
        }
        else {      
            subMenus[0].style.display = 'block';
        }
    }
    
}

function open2() {
    if (document.documentElement.clientWidth > 512) {
        if (subMenus[0].style.display == 'block') {
            subMenus[0].style.display = 'none';
        }
        if (subMenus[1].style.display == 'block') {
            subMenus[1].style.display = 'none';
        }
        else {      
            subMenus[1].style.display = 'block';
        }
    }
    
}

