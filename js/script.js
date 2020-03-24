$(document).ready(function () {
    $('a[href^="#"]').click(function () {

        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });
});

(function () {
    var toggle = document.querySelector('.nav-toggle');
    toggle.addEventListener('click', function (e) {
        this.classList.toggle('opened');
    });
})();

//popup start
var $popOverlay = $(".popup-overlay");
var $popWindow = $(".popWindow");
var $subscribeWindow = $(".subscribe_window");
var $popThankYouWindow = $(".thank_you_window");
var $popClose = $(".close-btn");

$(function () {
    // Close Pop-Up after clicking on the button "Close"
    $popClose.on("click", function () {
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
    });

    // Close Pop-Up after clicking on the Overlay
    $(document).on("click", function (event) {
        if ($(event.target).closest($popWindow).length) return;
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        event.stopPropagation();
    });

    // Form Subscribe
    $(".subscribe-form").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            
        });
        return false;
    });
});

$(window).load(function () {
    setTimeout(function () {
        $popOverlay.fadeIn();
        $subscribeWindow.fadeIn();
    }, 2000);
});

//popup end
$(function () {

    $("#phone-number").mask("+7(999) 999-99-99");
});
//показать и скрыть каталог

$('#all-catalog').click(function () {
    $('.mob-catalog-none').slideToggle(300);

    if (!$(this).data('status')) {
        $(this).html('Скрыть весь каталог');
        $(this).data('status', true);
    }
    else {
        $(this).html('Весь каталог');
        $(this).data('status', false);
    }
})

//hover desktop
$('#hover-one').hover(function () {
    $('#desk-hover-one').toggleClass('hover');
});
$('#hover-two').hover(function () {
    $('#desk-hover-two').toggleClass('hover');
});
$('#hover-three').hover(function () {
    $('#desk-hover-three').toggleClass('hover');
});
$('#hover-four').hover(function () {
    $('#desk-hover-four').toggleClass('hover');
});
$('#hover-five').hover(function () {
    $('#desk-hover-five').toggleClass('hover');
});
$('#hover-six').hover(function () {
    $('#desk-hover-six').toggleClass('hover');
});

//hover mobile
$('#link-left').hover(function () {
    $('#link-hover').toggleClass('hover');
});

$('#link-right').hover(function () {
    $('#link-hover-six').toggleClass('hover');
});
$('#link-two').hover(function () {
    $('#link-hover-two').toggleClass('hover');
});
$('#link-three').hover(function () {
    $('#link-hover-three').toggleClass('hover');
});
$('#link-four').hover(function () {
    $('#link-hover-four').toggleClass('hover');
});
$('#link-five').hover(function () {
    $('#link-hover-five').toggleClass('hover');
});

//клик по бургеру меню
$('.burg-span').click(function () {
    $('#burg').toggleClass('active-color active-bottom active-padding');
    $('.img-fluid').toggleClass('active-logo');
    $('.header__registr').toggleClass('active-btn');
    $('.input-group').toggleClass('active-input');


});

$('.mobile-tab').hide();

//скрыть и показать мобильного меню
$('.burg-span').on('click', function () {
    $('.mobile-tab').slideToggle(500);
});

