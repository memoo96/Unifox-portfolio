$(document).ready(function(){


    /* icon of navbar Links slidToggle When Click On It */
    $('i.icon').click(function(){
        $('.nav-list').slideToggle();
    });



    /* When Scroll Change Header Background */
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 100){
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }

        /* CountTo Plugin */                                 
        if( sc > 1981 ){
            $('.timer').countTo();
            $(window).off('scroll');
        }

    });



    /* portfolio button change background */              /* Tricky.................   */
    $('.buttons button').click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');

        var CssFilter = $(this).attr('id');
        if(CssFilter === 'all'){
            $('.images > div').fadeIn();
        }
        else{
            $('.images > div').fadeOut();
            $('.images').contents().filter('.' + CssFilter).fadeIn();
        }
    });

   

   
   

});