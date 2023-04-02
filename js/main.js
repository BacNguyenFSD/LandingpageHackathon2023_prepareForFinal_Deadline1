let close = document.querySelector('.navbar-icon i');
let navbarIcon = document.querySelector('.header-icon i')
let navbar = document.querySelector('.header-navbar');
let listBtnProduct = document.querySelectorAll('.product-button');
let modalContainer = document.querySelector('.modal-container');
let modalClose = document.querySelector('.close-btn');

navbarIcon.addEventListener('click',() => {
    navbar.classList.toggle('active')
})
close.addEventListener('click', () => {
    navbar.classList.remove('active')
})
window.addEventListener('scroll', () => {
    navbar.classList.remove('active')
})

listBtnProduct.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalContainer.classList.add('active')
    })
})
modalClose.addEventListener('click', () => {
    modalContainer.classList.remove('active')
})