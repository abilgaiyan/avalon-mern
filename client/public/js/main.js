
//  new WOW().init();

 $(function () {
    
        $('.panel-collapse').on('show.bs.collapse', function () {
            $(this).siblings('.panel-heading').addClass('active');
        });

        $('.panel-collapse').on('hide.bs.collapse', function () {
            $(this).siblings('.panel-heading').removeClass('active');
        });


        $(".Summary").on("click", function() {
            $("#Summary").collapse('show');
        });
        $(".Summary").on("click", function() {
            $("#Summary").collapse('hide');
        });
        
        /* ensure any open panels are closed before showing selected */
        $('#accordion').on('show.bs.collapse', function () {
            $('#accordion .in').collapse('hide');
        });
    
});


