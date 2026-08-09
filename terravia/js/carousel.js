// carousel.js - lightweight accessible carousel
(function(){
  const slidesEl = document.getElementById('slides');
  const slides = Array.from(document.querySelectorAll('.slide'));
  let idx = 0;
  const total = slides.length;
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  function go(i){
    idx = (i + total) % total;
    slidesEl.style.transform = `translateX(${ -idx * 100 }%)`;
  }
  prevBtn.addEventListener('click', ()=>go(idx-1));
  nextBtn.addEventListener('click', ()=>go(idx+1));
  let timer = setInterval(()=>go(idx+1), 6000);
  // pause on hover/focus
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', ()=>clearInterval(timer));
  carousel.addEventListener('mouseleave', ()=>timer=setInterval(()=>go(idx+1),6000));
  carousel.addEventListener('focusin', ()=>clearInterval(timer));
  carousel.addEventListener('focusout', ()=>timer=setInterval(()=>go(idx+1),6000));
})();
