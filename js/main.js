
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll' , function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // Bagde 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    //상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, .6 ,{
      opacity: 1,
      x:0
    });
  } else {
    // Bagde 요소 보이기!
    gsap.to(badgeEl, .6 ,{
      opacity : 1,
      display : 'block'
    });
    //상단으로 이동 버튼 숨기기! 
    gsap.to(toTopEl, .6 , {
      opacity: 0 ,
      x:100
    });
  }
});
toTopEl.addEventListener('click' , function() {
  gsap.to(window, .6 , {
    scrollTo: 0
  });
});
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay : (index + 1) * .7,
    opacity: 1
  });
});
// Swiper.js
new Swiper('.notice .swiper' , {
  direction: 'vertical' , //수직 슬라이드
  autoplay : true , // 자동 재생 여부
  loop : true //반복 재생 여부
});
new Swiper('.promotion .swiper' , {
  //direction: 'horizontal', //수평 슬라이드
  autoplay: true , //자동 재생 여부
  loop : true , //반복 재생 여부
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10 , //슬라이드 사이 여백
  centeredSlides: true ,//1번 슬라이드가 가운데 보이기
  pagination : {
    el: '.promotion .swiper-pagination' ,
    clickable :true
  },
  navigation: {
    prevEl : '.promotion .swiper-button-prev' ,
    nextEl : '.promotion .swiper-button-next'
  }
});
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 토글 버튼을 클릭했을 때. 
promotionToggleBtn.addEventListener('click' , function() {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});
gsap.to('.floating1' , 1.5, {
  delay:1,
  y:15,
  repeat: -1,
  yoyo:true,
  ease:Power1.easeInOut
});
gsap.to('.floating2' , 2, {
  delay:.5,
  y:20,
  repeat: -1,
  yoyo:true,
  ease:Power1.easeInOut
});
gsap.to('.floating3' , 2.5, {
  delay:1.5,
  y:20,
  repeat: -1,
  yoyo:true,
  ease:Power1.easeInOut
});
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement:spyEl,
      triggerHook : .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
new Swiper('.awards .swiper', {
  autoplay : true ,
  loop : true ,
  spaceBetween : 30 ,
  slidesPerView : 5 
});
