
//  new WOW().init();

$(function () {
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('shown.bs.collapse', function () {
        var $panel = $(this).closest('.panel');
        $('html,body').animate({
            scrollTop: $panel.offset().top - 104
        }, 500);

        var select_id = $(this).attr('id');
        $("#sidebar-nav-menu .list-group-item[href$=" + select_id + "]").addClass('active')
        $("#sidebar-nav-menu .list-group-item[href$=" + select_id + "]").siblings('.list-group-item').removeClass('active')
        //alert($("#sidebar-nav-menu a[href$=" + select_id +"]").attr('href'))
    });
    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
        var select_id = $(this).attr('id');
        $("#sidebar-nav-menu .list-group-item[href$=" + select_id + "]").removeClass('active')
    });
    /* ensure any open panels are closed before showing selected */
    // $('#accordion1').on('show.bs.collapse', function () {
    //     $('#accordion1 .panel-collapse.in').collapse('hide');
    // });

});


