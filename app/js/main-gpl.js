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

    $( ".section4__years a" ).click(function(e) {
        e.preventDefault();
        $(".section4__years a").removeClass('active');
        $(".section4__desc-block").removeClass('active');
        $(this).addClass('active');
        $(".section4__desc-block[data-year='" + $(this).attr('data-year') + "']").addClass('active');
        if($(this).attr('data-year') == '1996') {
            $('.section4__desc-block').css('border-radius', '0 20px 20px 20px');
        } else if($(this).attr('data-year') == '2020') {
            $('.section4__desc-block').css('border-radius', '20px 0 20px 20px');
        } else {
            $('.section4__desc-block').css('border-radius', '20px');
        }
    });
});
