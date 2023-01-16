gsap.registerPlugin(ScrollTrigger);

function setScrollText(){

  gsap.to('#heading1', {
    scrollTrigger: {
      trigger: '#heading1',
      toggleActions: 'play reverse play reverse',
      start: '0s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#heading2', {
    scrollTrigger: {
      trigger: '#heading2',
      toggleActions: 'play reverse play reverse',
      start: '+=500s',
      end: '+=500s',
    },
    opacity: 1,
  });

  gsap.to('#heading3', {
    scrollTrigger: {
      trigger: '#heading3',
      toggleActions: 'play reverse play reverse',
      start: '+=1000s',
      end: '+=3000s',
    },
    opacity: 1,
  });
}



gsap.to('.p-story__wrap', {
  scrollTrigger: {
    pin: '.p-story__wrap',
    end: '+=1500s',
    pinSpacing: true,
  },
});


setScrollText();
setScrollImages();