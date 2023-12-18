let newClassKey = "active";

const menuBtn = document.querySelector(".menu"),
    navBar = document.querySelector(".new-navbar");
    
menuBtn.addEventListener("click", () => {
    navBar.classList.toggle(newClassKey);
});    
