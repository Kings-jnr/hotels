const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnicon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnicon.setAttribute(
        "class", 
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navlinks.addEventListener("click", () => {
    navlinks.classList.remove("open");
    menuBtn.setAttribute("class", "ri-menu-3-line");
});

const ScrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...ScrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
    ...ScrollRevealOption,
    delay:500,
})
ScrollReveal().reveal(".header__btns", {
    ...ScrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".hotel__card", {
    ...ScrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".steps__card", {
    ...ScrollRevealOption,
    interval: 500,
});

const inspiration = document.querySelector(".inspiration__wrapper")
const inspirationImages = Array.from(inspiration.children)

inspirationImages.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    inspiration.appendChild(duplicateNode);
})

ScrollReveal().reveal(".property__card", {
    ...ScrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".trip__card", {
    ...ScrollRevealOption,
    interval: 500,
});