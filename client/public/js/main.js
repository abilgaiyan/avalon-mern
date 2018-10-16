
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

        $(".Customer_Info").on("click", function() {
            $("#Customer_Info").collapse('show');
        });
        $(".Customer_Info").on("click", function() {
            $("#Customer_Info").collapse('hide');
        });

        $(".Call_Log").on("click", function() {
            $("#Call_Log").collapse('show');
        });
        $(".Call_Log").on("click", function() {
            $("#Call_Log").collapse('hide');
        });

        $(".Phone").on("click", function() {
            $("#Phone").collapse('show');
        });
        $(".Phone").on("click", function() {
            $("#Phone").collapse('hide');
        });

        $(".Emails").on("click", function() {
            $("#Emails").collapse('show');
        });
        $(".Emails").on("click", function() {
            $("#Emails").collapse('hide');
        });
        
        /* ensure any open panels are closed before showing selected */
        $('#accordion').on('show.bs.collapse', function () {
            $('#accordion .in').collapse('hide');
        });
    
});


