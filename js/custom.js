// window.scrollTo(0.0);

window.scroll({
  top: 0,
  left: 100,
  behavior: 'smooth',
});

gsap.to('h1', {
  y: -10, // 단위는 px
  duration: 1,
  opacity: 1,
  repeat: 0, //0일 경우 한번만 실행 , -1일 경우 무한 반복
  yoyo: true, // true일 경우 되돌림 효과
  borderRadius: 0,
  stagger: {
    // wrap advanced options in an object
    each: 0.5,
    // from: "center",
    from: 0,
    // grid: "auto",
    // ease: "power2.inOut",
    ease: 'linear',
  },
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger:
      '.coco-se-img, .coco-title01, .coco-title02, .coco-sub01, .coco-sub02',
    start: 'top center',
    end: 'bottom center',
    // scrub: true,
    markers: true,
    // yoyo: true,
    // repeat: -1,
  },
});

tl.to('.coco-se-img img', {
  top: 0,
  opacity: 1,
});
tl.to('.coco-title01', {
  left: 188,
  opacity: 1,
});
tl.to('.coco-title02', {
  left: 980,
  opacity: 1,
});
tl.to('.coco-sub01', {
  left: 308,
  opacity: 1,
});
tl.to('.coco-sub02', {
  left: 1155,
  opacity: 1,
});

// coco-year-slott

odoo.default({
  el: '.y-text',
  from: '1883',
  to: '2023',
  yoyo: true,
  repeat: -1,
  animationDelay: 2000,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to('.year-img', {
  left: -2000,
  opacity: 1,
  scrollTrigger: {
    trigger: '.year-img img',
    start: 'top center',
    end: '100% center',
    scrub: true,
    markers: true,
  },
  duration: 1,
  ease: 'expo.out',
});

// gsap.to(".year-img", {
//   left: -2000,
//   opacity: 1,
//   animationDelay: 6000,
//   duration: 9,
//   ease: "expo.out",
//   // yoyo: true,
//   repeat: 0,
//   scrub: true,
// });

//last section-horizontal scroll

const races = document.querySelector('.product-scroll');
// console.log(races.offsetWidth); //races 요소 가로 길이
// console.log(window.innerWidth); //화면 길이

function getScrollAmount() {
  const raceWidth = races.offsetWidth;
  return -(raceWidth - window.innerWidth);
  //races 전체 길이 - 화면 길이
}

console.log(getScrollAmount());

// window.addEventListener("scroll", (e) => {
//   // console.log(e);
//   let scrTop = window.pageYOffset;
//   console.log((scrTop += getScrollAmount() * -1));
// });

const tw = gsap.to(races, {
  x: getScrollAmount(),
  duration: 3,
  ease: 'lnear',
});

ScrollTrigger.create({
  trigger: '.prWrapper',
  start: 'top top',
  markers: true,
  // end: () => `+=${getScrollAmount() * -1}`,
  end: `${-getScrollAmount()} center`,
  // -를 준 이유는 앞의 값이 - 이기 때문에 플러스로 만들기 위해서
  // scroll end는 10%로 맞춤
  animation: tw,
  pin: true, // start 지정 이후로 요소는 고정되고, 지정된 end 값까지 스크롤이 진행된다.
  scrub: 1,
});
