let nam = document.querySelector(".more_btn a");
let mor = document.querySelector(".more");
let tog = document.querySelector(".toggle_select");
let nav = document.querySelector(".nav_one");

function toggle() {
    if (nam.innerHTML == "More +") {
        mor.style.display = 'block';
        nam.innerHTML = "More -";
    }
    else {
        mor.style.display = 'none';
        nam.innerHTML = "More +";
    }
}

function toggleTwo () {
    if (tog.innerHTML == '<i class="fa fa-list"></i>') {
        nav.style.display = 'block';
        tog.innerHTML = '<i class="fa fa-times"></i>';
    }
    else {
        nav.style.display = 'none';
        tog.innerHTML = '<i class="fa fa-list"></i>';
    }
}


nam.addEventListener("click",toggle);
tog.addEventListener("click",toggleTwo);

// Get the nav_one and nav_two elements
const navOne = document.querySelector('.nav_one');
const navTwo = document.querySelector('.nav_two');

// Store the previous scroll position
let prevScrollPos = window.pageYOffset;

// Listen for scroll events
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // Check if the user has scrolled up or down
  if (prevScrollPos > currentScrollPos) {
    // User has scrolled up, fix the nav_two element
    navTwo.classList.add('fixed');
  } else {
    // User has scrolled down, unfix the nav_two element
    navTwo.classList.remove('fixed');
  }

  // Update the previous scroll position
  prevScrollPos = currentScrollPos;
});
