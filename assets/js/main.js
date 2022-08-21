// gnbLayer - gnb li 마우스 올릴 때 활성화
$(document).ready(function(){
    $('.gnb ul li').mouseenter(function(){ //각각의 메인 메뉴에 마우스를 올려놨을 때
        $('.gnbLayer').stop().slideDown(500); //대소문자 구분 안하면 에러 뜸, gnbLayer가 슬라이드되어 보여짐
    });

    $('.gnbLayer').mouseleave(function(){ //gnbLayer에서 마우스가 벗어났을때
        $('.gnbLayer').stop().slideUp(200); //gnbLayer가 위로 닫히면서 안보이게됨
    });
});

// 메인 배너 visual_swiper
const swiper = new Swiper('.visual_swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });


// 메인 배너 thumb_swiper
const swiper2 = new Swiper('.thumb_swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
});


// lang_select 열기
function lang_open(){
  $('.lang_select').toggleClass('on'); 
};
