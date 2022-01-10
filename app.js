let burgerNav = document.querySelector(".hamburger");
let navigation = document.querySelector(".navbar-nav");
burgerNav.addEventListener("click", e => {
    navigation.classList.toggle("active");
})