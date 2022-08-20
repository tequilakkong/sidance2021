//gnb 마우스 이벤트 gnbLayer 활성화
$(document).ready(function(){
    $('.gnb ul li').mouseenter(function(){ //각각의 메인 메뉴에 마우스를 올려놨을 때
        $('.gnbLayer').stop().slideDown(500); //대소문자 구분 안하면 에러 뜸, gnbLayer가 슬라이드되어 보여짐
    });

    $('.gnbLayer').mouseleave(function(){ //gnbLayer에서 마우스가 벗어났을때
        $('.gnbLayer').stop().slideUp(200); //gnbLayer가 위로 닫히면서 안보이게됨
    });

});