const navbarLinksWrapper = document.querySelector(".navbar-links-wrapper");
const threeRowsIcon = document.querySelector(".three-rows-icon");

threeRowsIcon.addEventListener("click",() => {
    threeRowsIcon.classList.toggle("on");
    navbarLinksWrapper.classList.toggle("on");
    console.log("tuki")
})

var checkSizeNavbar = function() {
    var width = window.innerWidth;
    if (width >= 768) {
        if (threeRowsIcon.classList.contains("on")) {
            threeRowsIcon.classList.remove("on");
            navbarLinksWrapper.classList.remove("on");
        }
    }
}

window.addEventListener("resize", checkSizeNavbar);