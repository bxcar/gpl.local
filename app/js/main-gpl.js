$(document).ready(function () {
    document.querySelectorAll('.header__menu-item').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $( ".section1__titles a" ).click(function(e) {
        e.preventDefault();
        $(".section1__titles a").removeClass('active');
        $(".section1__titles2 a").removeClass('active');
        $(".section1__logos-inner-wrapper").removeClass('active');
        $(this).addClass('active');
        $(".section1__logos-inner-wrapper[data-title='" + $(this).attr('data-title') + "']").addClass('active');
    });

    $( ".section1__titles2 a" ).click(function(e) {
        e.preventDefault();
        $(".section1__titles a").removeClass('active');
        $(".section1__titles2 a").removeClass('active');
        $(".section1__logos-inner-wrapper").removeClass('active');
        $(this).addClass('active');
        $(".section1__logos-inner-wrapper[data-title='" + $(this).attr('data-title') + "']").addClass('active');
    });
});
