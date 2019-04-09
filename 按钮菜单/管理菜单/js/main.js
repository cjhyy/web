$(function(){

    $('.list li').click(function(){
        if($(this).hasClass('hover')){
            $(this).removeClass('hover')
        }else{
            $(this).addClass('hover');
        }
        $(this).find('.con').slideToggle('slow');
        $(this).siblings().removeClass('hover').find('.con').slideUp('quickly');
    });

    $('.con li').hover(function(){
        $(this).css('background','#333');

    },function(){
        $(this).css('background','#444');
    });

});