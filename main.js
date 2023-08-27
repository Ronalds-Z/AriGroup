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
const burgerItem = document.querySelector(".burger-menu");
if (burgerItem) {
    const navElement = document.querySelector(".nav-head");
    burgerItem.addEventListener("click", () => {
        navElement.classList.toggle("show");
    });
}