{

    document.body.classList.remove('no-js');
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    function toggleMenu(open) {menuBtn.classList.toggle('active', open); menuOverlay.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); menuOverlay.setAttribute('aria-hidden', String(!open)); document.body.style.overflow = open ? 'hidden' : ''}
    menuBtn.addEventListener('click', () => toggleMenu(!menuOverlay.classList.contains('open')));
    menuOverlay.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
    document.addEventListener('keydown', e => {if (e.key === 'Escape') toggleMenu(false)});
    const toTop = document.getElementById('toTop');
    const hero = document.querySelector('.hero');
    const topObserver = new IntersectionObserver(([entry]) => {toTop.classList.toggle('show', !entry.isIntersecting)}, {threshold: 0});
    topObserver.observe(hero);
    toTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.hero-img', {scale: 1, duration: 1.8, ease: 'power2.out'});
      gsap.from('.hero-content > *', {y: 35, opacity: 0, duration: 1, stagger: .16, ease: 'power3.out', delay: .25});
      gsap.utils.toArray('.reveal').forEach(el => gsap.to(el, {y: 0, opacity: 1, duration: .9, ease: 'power2.out', scrollTrigger: {trigger: el, start: 'top 84%', once: true}}));
    }
}



// {
//   document.addEventListener("DOMContentLoaded", () => {
//  const tl = gsap.timeline({
//     defaults: { duration: 1, ease: "power3.out" }
//   });

//   // 要素を順番にアニメーション
//   tl.to(".fv__curtain", { duration: 1.5, x: "100%", ease: "power4.inOut" }) // カーテンが流れる
//     .from(".fv__logo", { opacity: 0, y: 30 })                               // ロゴ出現
//     .from(".fv__text span", { opacity: 0, y: 20, stagger: 0.05 }, "-=0.3")  // テキスト出現
//     .to(".fv__inner", { scale: 0.8, ease: "elastic.out(1,1)" })              // 全体のサイズ
//     .from(".fv__undertxt", { opacity: 0, y: 10 }, "+=0.5");                  // サブテキスト出現


//   // 背景グラデーション変化
//   gsap.to(".fv__bg", {
//     background: "linear-gradient(120deg,#6e6eff,#ffb74d,#ffe082)",
//     duration: 6,
//     repeat: -1,
//     yoyo: true,
//     ease: "sine.inOut"
//   });
// });
// }

{
    document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

  // 要素を順番にアニメーション
  tl.to('.fv__curtain', { duration: 1.5, x: '100%', ease: 'power4.inOut' }) // カーテンが流れる
    .from('.fv__logo', { opacity: 0, y: 30 }) // ロゴ出現
    .from('.fv__text span', { opacity: 0, y: 20, stagger: 0.05 }, '-=0.3') // テキスト出現
    .to('.fv__inner', { scale: 0.8, ease: 'elastic.out(1, 1)' }) // 全体のサイズ
    .from('.fv__undertxt', { opacity: 0, y: 10 }, '+=0.5'); // サブテキスト出現

  // 背景グラデーション変化
  gsap.to('.fv__bg', {
    background: 'linear-gradient(120deg, #6e6eff, #ffb74d, #ffe082)',
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
});
}


// MENS
{
    gsap.to(".panelstack3d", {
  translateZ: 0,
  rotateX: 0,
  duration: 2.4,
  stagger: 0.55, 
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".u3d-08",
    start: "top 60%",
  }
});

}



