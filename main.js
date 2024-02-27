let searchBar = document.querySelector(".search-bar");
let shoppingCart = document.querySelector(".shopping-cart");
let sidebarMenu = document.querySelector(".sidebar-menu");

document.querySelector(".search-btn").addEventListener('click', () => {
    searchBar.classList.toggle("active");
    shoppingCart.classList.remove("active");
    sidebarMenu.classList.remove("active");
});

document.querySelector(".fa-cart-shopping").addEventListener('click', () => {
    shoppingCart.classList.toggle("active");
    searchBar.classList.remove("active");
    sidebarMenu.classList.remove("active");
});

document.querySelector(".fa-bars").addEventListener('click', () => {
    sidebarMenu.classList.toggle("active");
    searchBar.classList.remove("active");
    shoppingCart.classList.remove("active");
});


window.onscroll = () => {
    searchBar.classList.remove("active");
    shoppingCart.classList.remove("active");
    sidebarMenu.classList.remove("active");
}