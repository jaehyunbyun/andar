$(function(){
     //상단 배너
    var swiper = new Swiper(".top", {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
        }, 
    });





    

    //사이드 메뉴 아코디언 뒷배경 dimmed까지
    $('.link-menu').click(function(e){
        e.preventDefault();
        $('.side-area, .dimmed').addClass('active');
        $('body').addClass('hidden');
    })
    

    $('.btn-close, .dimmed').click(function(e){
        e.preventDefault();
        $('.side-area, .dimmed').removeClass('active');
        $('body').removeClass('hidden');
    })
    


    //검색창 나오는 부분
    $('.link-search').click(function(e){
        e.preventDefault();
        $('.search-area').show();
    });

    $('.search-area .btn-back').click(function(e){
        e.preventDefault();
        $('.search-area').hide();
    });


    //커밋
    
    //사이드메뉴 리스트
    $('.sidemn-item').click(function(e){
        
        e.preventDefault();
        $(this).children('.btn-sidemn').toggleClass('show');
        //저번에 배운거 보고 참고
        if ($(this).children('ul').css('display') == 'none') {
            
            // $('.sub-list').stop().slideDown();
            // ㄴ 다올라가고 누른것만 내려오게 
            $(this).children('ul').stop().slideDown();

        } else {
            $(this).children('ul').stop().slideUp();
        }

    })






    // if ($(this).children().css('display')=='none') {
    //     $(this).stop().slideUp();
    //     $(this).siblings().stop().slideDown();




    //스크롤 내리면 메뉴바 바뀌는 부분.
    $(window).scroll(function(){
        if ($(this).scrollTop()>0) {
            $('header').addClass('active');

        } else {
            $('header').removeClass('active');
        }

    })

    //스크롤 내린 상태서 버튼
    $('.btn-gnb').click(function(e){
        e.preventDefault();
        $(this).toggleClass("show");
        $('.gnb-wrap .title').toggleClass("show");
        $('.gnb-list').toggleClass('hide');
        $('.acco-wrap').stop().slideToggle();
    })







    //메인 슬라이드
    var swiper = new Swiper(".slide", {
        loop: true,

        effect: 'fade',     
        
        pagination: {
            el: ".swiper-pagination",
        },
        

        // scrollbar: {
        //     el: ".swiper-scrollbar",
        //     hide: true,
        // },

        autoplay: {
            delay: 3500,
            disableOnInteraction: false, // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
        }, 
    });

    //상품 슬라이드
    var swiper = new Swiper(".productwrap", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        // lazy : {
        //     loadPrevNext : true // 이전, 다음 이미지는 미리 로딩
        // },
        
    });





    //스크롤 탑 버튼 

    $('.btn-quick').hide();

    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        // curr = $(window).scrollTop();
        //스크롤값을 가져온다.
        if(wheel > 0){
        //스크롤 올릴때
        $(".btn-quick").stop().fadeIn();
        } else {
        //스크롤 내릴때
        $(".btn-quick").stop().fadeOut();
        }

        // console.log('curr');
    });


    // $('.btn-quick').hide(); 
    
    // //스크롤이 200이상일때 top버튼 보임
    // $(window).scroll(function(){
    
    //     if($(this).scrollTop()>200){
    //         $('.btn-quick').fadeIn();
    //     }else{
    //         $('.btn-quick').fadeOut();
    //     }
    // });

});