let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .navbar');
menu.onclick= () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');   
}
window.onsroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
window.onscroll = function() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block"; // يظهر السهم عند التمرير للأسفل
    } else {
        scrollButton.style.display = "none"; // يختفي عندما تكون في أعلى الصفحة
    }
};

// عند النقر على السهم، يرجع للموقع الأعلى
document.getElementById("scroll-to-top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // ينقلك للأعلى بسلاسة
});