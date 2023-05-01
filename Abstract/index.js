const tog = document.querySelector(".toggle a")
const btn_one = document.querySelector(".btn-one")
const btn_two = document.querySelector(".btn-two")

function toggle() {
    if (tog.innerHTML == '<i class="fas fa-bars"></i>') {
        tog.innerHTML = '<i class="fas fa-times"></i>';
        btn_one.classList.add("active");
        btn_two.classList.add("active");
    }
    else {
        tog.innerHTML = '<i class="fas fa-bars"></i>';
        btn_one.classList.remove("active");
        btn_two.classList.remove("active");
    }
}

tog.addEventListener("click",toggle)