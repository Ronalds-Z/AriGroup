const headscroll = document.querySelector(".header");
window.addEventListener("scroll", () => {
    const pagescroll = window.scrollY || window.pageYOffset;
    if (pagescroll > 1) {
        headscroll.classList.add("scrolled");
    }
    else {
        headscroll.classList.remove("scrolled");
    }
})