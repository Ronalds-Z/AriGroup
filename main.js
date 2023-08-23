const headerElement = document.querySelector(".header");
if (headerElement) {
    window.addEventListener("scroll", () => {
        const pagescroll = window.scrollY;

        if (pagescroll > 1) {
            headerElement.classList.add("scrolled");
        }
        else {
            headerElement.classList.remove("scrolled");
        }
    })
}