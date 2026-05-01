// Header
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');
const toggleIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');

    if (dropdownMenu.classList.contains('open')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-times');
    } else {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
    }
});

// Hero
var typed = new Typed('.auto-type', {
    strings: [
        "<span class='front'>Frontend Developer</span>",
        "<span class='back'>Backend Developer</span>",
        "<span class='soft'>Software Engineer</span>"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    contentType: 'html'
});

document.getElementById("btn_explore").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    })
})