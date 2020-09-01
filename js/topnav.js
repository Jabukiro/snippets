// Get the header
var header = document.getElementById("topNavBar");
// Get the offset position of the navbar
var sticky = header.offsetTop;
function stickyNav() {
    if (window.pageYOffset > sticky) {
        header.classList.add("top-nav-collapse");
    } else {
        header.classList.remove("top-nav-collapse");
    }
}
document.addEventListener("scroll", stickyNav);