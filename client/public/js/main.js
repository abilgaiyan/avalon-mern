
//  new WOW().init();

$(function () {

    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });


    /* ensure any open panels are closed before showing selected */
    // $('#accordion1').on('show.bs.collapse', function () {
    //     $('#accordion1 .panel-collapse.in').collapse('hide');
    // });

});


