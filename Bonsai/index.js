const navBtn = document.querySelector(".nav-icon");
const navOne = document.querySelector("nav > ul:nth-child(2)");
const navTwo = document.querySelector("nav > ul:nth-child(3)");

navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("fa-ellipsis-h")) {
    navBtn.classList.remove("fa-ellipsis-h");
    navBtn.classList.add("fa-times");
    navOne.style.display = "flex";
    navTwo.style.display = "flex";
  } else {
    navBtn.classList.remove("fa-times");
    navBtn.classList.add("fa-ellipsis-h");
    navOne.style.display = "";
    navTwo.style.display = "";
  }
});

const subMenus = document.querySelectorAll(".submenu");

function open1() {
  if (document.documentElement.clientWidth > 512) {
    if (subMenus[1].style.display == "block") {
      subMenus[1].style.display = "none";
    }
    if (subMenus[0].style.display == "block") {
      subMenus[0].style.display = "none";
    } else {
      subMenus[0].style.display = "block";
    }
  }
}

function open2() {
  if (document.documentElement.clientWidth > 512) {
    if (subMenus[0].style.display == "block") {
      subMenus[0].style.display = "none";
    }
    if (subMenus[1].style.display == "block") {
      subMenus[1].style.display = "none";
    } else {
      subMenus[1].style.display = "block";
    }
  }
}

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".accordions .description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight + 5 }px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".accordions .description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
