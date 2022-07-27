gsap.to('.sc-main .bg-area img',{
    scrollTrigger:{
      trigger:'.sc-main .img-box',
      start:'top 50%',
      end:'bottom top',
      // markers:true,
      scrub:1,
    },
    yPercent:-20
  });
  // 메인 이미지 컨트롤