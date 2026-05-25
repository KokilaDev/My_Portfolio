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

// Projects
$(document).ready(function () {
    const projectsPerPage = 6;
    const $projects = $(".box-project-card");
    const totalProjects = $projects.length;
    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    function showPage(page) {
        $projects.hide();
        const start = (page - 1) * projectsPerPage;
        const end = start + projectsPerPage;
        $projects.slice(start, end).fadeIn(300);
        $(".pagination button").removeClass("active");
        $(".pagination button").eq(page - 1).addClass("active");
    }

    function createPagination() {
        for (let i = 1; i <= totalPages; i++) {
            $("#pagination").append(
                `<button class="page-btn">${i}</button>`
            );
        }
        $(".page-btn").click(function () {
            const pageNumber = $(this).text();
            showPage(pageNumber);
        });
    }

    createPagination();
    showPage(1);
});