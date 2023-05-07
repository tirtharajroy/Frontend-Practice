/* Slider Function
var isDown = false;
var startX;
var scrollLeft;

var slider = document.querySelector('.cards-hz');

slider.addEventListener('mousedown', function(e) {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', function() {
        isDown = false;
});

slider.addEventListener('mouseup', function() {
    isDown = false;
});

slider.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});*/

let isDown = false;
let startX;
let scrollLeft;

const slider = document.querySelector('.cards-hz');

slider.addEventListener('mousedown', function(e) {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', function () {
  isDown = false;
});

slider.addEventListener('mouseup', function () {
  isDown = false;
});

slider.addEventListener('mousemove', function(e) {
  if (!isDown) return;
  e.preventDefault();
  let x = e.pageX - slider.offsetLeft;
  let walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});



/* Change Background
// Get the chg-bg section element
const chgBgSection = document.querySelector('.chg-bg p');

// Set up the IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'chg-bg-active' class to the body element
      document.body.classList.add('chg-bg-active');
    } else {
      // Remove the 'chg-bg-active' class from the body element
      document.body.classList.remove('chg-bg-active');
    }
  });
});

// Observe the chg-bg section element
observer.observe(chgBgSection);
*/

const chgBg = document.querySelector('.chg-bg p');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.add('chg-bg-active');
    } else {
      document.body.classList.remove('chg-bg-active');
    }
  });
});

observer.observe(chgBg);

