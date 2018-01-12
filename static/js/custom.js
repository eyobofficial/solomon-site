$(function() {
    $(function(){
        $('.panel-body').not(':first').addClass('hide');
        $('.panel-heading').click(function(){
            $('.panel-body').removeClass('hide').addClass('hide');
            $('.panel-heading').find('i').removeClass('fa-chevron-down').addClass('fa-chevron-right');
            $(this).find('i').removeClass('fa-chevron-right').addClass('fa-chevron-down');
            $(this).next('.panel-body').toggleClass('hide');
        })
    });
} );