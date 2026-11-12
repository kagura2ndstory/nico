 
 {
  document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('no-js');

  // 1. ハンバーガーメニューの制御
  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');

  if (menuBtn && menuOverlay) {
    const toggleMenu = (open) => {
      menuBtn.classList.toggle('active', open);
      menuOverlay.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuOverlay.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = menuOverlay.classList.contains('open');
      toggleMenu(!isOpen);
    });

    menuOverlay.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuOverlay.classList.contains('open')) {
        toggleMenu(false);
        menuBtn.focus(); // キーボード操作時にボタンへフォーカスを戻す
      }
    });
  }

  // 2. トップへ戻るボタンの制御
  const toTop = document.getElementById('toTop');
  const hero = document.querySelector('.hero');

  if (toTop && hero) {
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        toTop.classList.toggle('show', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    topObserver.observe(hero);

    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. GSAP アニメーション
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector('.hero-img')) {
      gsap.to('.hero-img', { scale: 1, duration: 1.8, ease: 'power2.out' });
    }

    if (document.querySelector('.hero-content > *')) {
      gsap.from('.hero-content > *', {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
        delay: 0.25,
      });
    }

    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          once: true,
        },
      });
    });
  }
});
 }



 // swiper

  {
      const swiper = new Swiper("#sw01", {
  loop: true, 
  parallax: true, 
  allowTouchMove: false, 
  speed: 2000, 
  autoplay: { 
    delay: 5000, 
    disableOnInteraction: false, 
  },
  
  
  
});
  }


  {
        var swiper = new Swiper("#sw02", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: 4,
  slidesPerView: "auto",
  loop: true,
  // loopAdditionalSlides: 6,
   watchSlidesProgress: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },

  // autoplay: ture,
  speed: 1600,
  autoplay: { // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    
  },

  pagination: {
    el: ".swiper-pagination"
  }
});

  }