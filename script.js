$(document).ready(function () {
    $('.toggle_btn').click(function () {
        $('.dropdown_menu').toggleClass('open');
        if ($('.dropdown_menu').hasClass('open')) {
            $('.toggle_btn i')
                .removeClass('fa-bars')
                .addClass('fa-times');
        } else {
            $('.toggle_btn i')
                .removeClass('fa-times')
                .addClass('fa-bars');
        }
    });

    new Typed('.auto-type', {
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

    $('#btn_explore').click(function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    });

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
        $(".pagination button")
            .eq(page - 1)
            .addClass("active");
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