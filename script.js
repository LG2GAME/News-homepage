const bodyShadow = document.querySelector('body');
const mobileNav = document.querySelector('ul');
const burger = document.querySelector('.hamburger-img');
const burgerClose = document.querySelector('.hamburger-img-close');

burger.addEventListener("click", function(){
    bodyShadow.classList.toggle("active");
    mobileNav.classList.toggle("active");
    burger.classList.toggle("active");
    burgerClose.classList.toggle("active");
})
burgerClose.addEventListener("click", function(){
    bodyShadow.classList.toggle("active");
    mobileNav.classList.toggle("active");
    burger.classList.toggle("active");
    burgerClose.classList.toggle("active");
})

const listElement = document.querySelector('#list-element');


listElement.addEventListener("click", function(){
    if(mobileNav.classList.contains("active")){
        bodyShadow.classList.toggle("active");
        mobileNav.classList.toggle("active");
        burger.classList.toggle("active");
        burgerClose.classList.toggle("active");
    }
    else{
    }
})