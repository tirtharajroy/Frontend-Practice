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
