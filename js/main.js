$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
    $('.hamburger').on('click', function() {
      if ($('header').hasClass('open')) {
        $('header').removeClass('open');
      } else {
        $('header').addClass('open');
      }
    });
    $('#mask').on('click', function() {
      $('header').removeClass('open');
    });
    $('#navi a').on('click', function() {
      $('header').removeClass('open');
    });
  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false; 
  });
  /*=================================================
  スライダー
  ===================================================*/
  $(".slide-items").slick({
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          centerPadding: "50px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });
  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop();      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
/*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $('#to-top');
  pagetop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });

  //アコーディオンをクリックした時の動作
$('.title').on('click', function() {
	$('.box').slideUp(500);
    
	var findElm = $(this).next(".box");
    
	if($(this).hasClass('close')){
		$(this).removeClass('close');    
	}else{
		$('.close').removeClass('close'); 
		$(this).addClass('close');
		$(findElm).slideDown(500);
	}
});
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); 
	$(".open").each(function(index, element){	
		var Title =$(element).children('.title');	
		$(Title).addClass('close');	
		var Box =$(element).children('.box');	
		$(Box).slideDown(500);
	});
});
});