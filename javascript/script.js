//  writing the simple a function for toggle navbar
//  require all property from dom manup...
// date 3 - 4 -2023
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navlinks = document.querySelector(".navlinks");
  navlinks.classList.toggle("active");
};
// select all require items
const body1 = document.body;
// handleClick function
function handleClick() {
  body1.classList.toggle("darkMode");
}
// handleSScroll function
function handleScroll() {
  body1.classList.add("scroll");
}
