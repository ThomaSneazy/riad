import './styles/style.css'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

console.log(
    '%c Dev by Thomas Carré\n' + 
    '🌐 Website: https://carre.studio.com\n' +
    '🐦 Twitter/X: https://x.com/ThomasCarre_' +
    '📸 Instagram: https://www.instagram.com/carre__studio/\n' +
    '💼 LinkedIn: https://www.linkedin.com/in/thomas-carre/\n' ,
    'background-color: #0b0b0b; color: #8B9A46; font-size:10px; padding:6px 10px 6px; border-radius:4px; line-height: 1.5;'
)




const roomLinks = document.querySelectorAll('.room__link');

roomLinks.forEach(link => {
 link.addEventListener('click', async (e) => {
   e.preventDefault();
   const href = link.getAttribute('href');
   
   // Vérifier la largeur de l'écran
   if (window.innerWidth <= 991) {
     // Redirection directe sans animation pour les petits écrans
     window.location.href = href;
     return;
   }

   const flipContainer = document.querySelector('.room__item__flip');
   const transitionElement = document.querySelector('.transition-from-home');
   const roomItem = link.closest('.room__item');
   const border = roomItem.querySelector('.room__border');
   
   transitionElement.classList.add('pointer');
   gsap.set(border, { opacity: 0 });
   
   await gsap.to(['.home-room__title', '.room__item p'], {
     opacity: 0,
     duration: 0.4,
     ease: 'power2.inOut'
   });
   
   // Setup FLIP
   link.style.width = link.offsetWidth + 'px';
   link.style.height = link.offsetHeight + 'px';
   
   const state = Flip.getState(link, {props: "width,height"});
   flipContainer.appendChild(link);
   
   await Promise.all([
     Flip.from(state, {
       duration: 1,
       ease: "power3.inOut", 
       absolute: true,
       width: '20rem',
       height: '30rem'
     }),
     gsap.to(transitionElement, {
       backgroundColor: 'var(--beige)',
       duration: 1,
       ease: "power3.inOut"
     })
   ]);
   
   setTimeout(() => window.location.href = href, 10);
 });
});



// const tl = gsap.timeline();
// gsap.set(['.entrez', '.respirez', '.laissez'], {
//   opacity: 0,
//   x: 10
// });
// gsap.set(['.heading-style-h1.is-1', '.heading-style-h1.is-2'], {
//   y: '100%',
//   skewY: 8
// });

// gsap.set('.hero__wrapper', {
//   borderTopLeftRadius: '20rem',
//   borderTopRightRadius: '20rem',
//   width: '20rem',
//   height: '30rem'
// });

// gsap.set('.hero__wrapper img', {
//   willChange: 'transform',
//   backfaceVisibility: 'hidden',
//   transform: 'translateZ(0)'
// });

// tl.to('.entrez', {
//   opacity: 1,
//   x: 0,
//   duration: 0.8,
//   ease: 'power2.out'
// })
// .to('.respirez', {
//   opacity: 1,
//   x: 0,
//   duration: 0.8,
//   ease: 'power2.out'
// }, '+=0.3')
// .to('.laissez', {
//   opacity: 1,
//   x: 0,
//   duration: 0.8,
//   ease: 'power2.out'
// }, '+=0.3')
// .to('.loader', {
//   opacity: 0,
//   duration: 0.8,
//   ease: 'power2.inOut',
//   onComplete: () => {
//     document.querySelector('.loader').style.display = 'none';
//   }
// }, '+=0.3')
// .to('.hero__wrapper', {
//   borderTopLeftRadius: '0rem',
//   borderTopRightRadius: '0rem',
//   width: "100%",
//   height: '100%',
//   duration: 1.2,
//   ease: 'power2.out',
//   force3D: true,
//   clearProps: 'transform'
// })
// .to('.heading-style-h1.is-1', {
//   y: '0%',
//   skewY: 0,
//   opacity: 1,
//   duration: 1,
//   ease: 'power3.out'
// })
// .to('.heading-style-h1.is-2', {
//   y: '0%',
//   opacity: 1,
//   skewY: 0,
//   duration: 1,
//   ease: 'power3.out'
// }, '-=0.8');



const spanPops = document.querySelectorAll('.span-pop');
const images = document.querySelectorAll('.img__text__home');

gsap.set(images, {
 opacity: 0,
 scale: 0.8
});

spanPops.forEach(span => {
 span.addEventListener('mouseenter', () => {
   const city = span.getAttribute('data-city');
   images.forEach(img => {
     if (img.getAttribute('data-city') === city) {
       gsap.to(img, {
         opacity: 1,
         scale: 1,
         duration: 0.4,
         ease: 'power2.out'
       });
     }
   });
 });

 span.addEventListener('mouseleave', () => {
   images.forEach(img => {
     gsap.to(img, {
       opacity: 0,
       scale: 0.8,
       duration: 0.4,
       ease: 'power2.in'
     });
   });
 });
});


const roomItems = document.querySelectorAll('.room__item');

roomItems.forEach(item => {
 const border = item.querySelector('.room__border');
 const image = item.querySelector('.img-room');
 const title = item.querySelector('p.text-align-center');

 gsap.set(title, {
   opacity: 0
 });

 gsap.set(image, {
  //  width: '50vw'
 });

 item.addEventListener('mouseenter', () => {
   gsap.to(border, {
     x: -15,
     y: -15,
     duration: 0.4,
     ease: 'power2.out'
   });

   gsap.to(image, {
    //  width: '100vw',
     duration: 0.4,
     ease: 'power2.out'
   });

   gsap.to(title, {
     opacity: 1,
     duration: 0.4,
     ease: 'power2.out'
   });
 });

 item.addEventListener('mouseleave', () => {
   gsap.to(border, {
     x: 0,
     y: 0,
     duration: 0.4,
     ease: 'power2.inOut'
   });

   gsap.to(image, {
    //  width: '50vw',
     duration: 0.4,
     ease: 'power2.inOut'
   });

   gsap.to(title, {
     opacity: 0,
     duration: 0.4,
     ease: 'power2.inOut'
   });
 });

 const link = item.querySelector('.room__link');
 if (link) {
   link.addEventListener('click', () => {
     gsap.to(image, {
       width: '100vw',
       duration: 1.2,
       ease: 'power3.inOut'
     });
   });
 }
});


gsap.set('.deco-img img', {
 scale: 1.2
});

document.querySelectorAll('.deco-img').forEach(trigger => {
 ScrollTrigger.create({
   trigger: trigger,
   start: 'top center',
   end: 'bottom center', 
//    markers: true,
   animation: gsap.to(trigger.querySelector('img'), {
     scale: 1,
     ease: 'none'
   }),
   scrub: true
 });
});







document.querySelector('.button.menu').addEventListener('click', (e) => {
  e.preventDefault();

const menuWrapper = document.querySelector('.menu__wrapper');
const menuLeft = document.querySelector('.menu__left');
const menuRight = document.querySelector('.menu__right');
const menuButton = document.querySelector('.button.menu');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');

const isOpen = menuWrapper.style.display === 'flex';

if (!isOpen) {
  menuWrapper.style.display = 'flex';
  menuButton.textContent = 'FERMER';
  navbar.classList.remove('is-active');
  menuButton.classList.add('is-black');
  logo.classList.add('is-black');
  
  const tl = gsap.timeline();
  
  tl.to([menuLeft, menuRight], {
    x: "0%",
    duration: 1.4,
    ease: 'power3.inOut',
    onComplete: () => {
      gsap.to('.button.is-menu-link', {
        y: "0%",
        skewY: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.inOut'
      });
      gsap.to('.menu__img__wrapper', {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.inOut'
      });
      gsap.to('.line-menu', {
        height: "100%",
        opacity: 1,
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to('.menu__link__socials', {
            opacity: 1,
            duration: 0.4,
            ease: 'power3.inOut'
          });
        }
      });
    }
  });
  
} else {
  menuButton.textContent = 'MENU';
  navbar.classList.add('is-active');
  menuButton.classList.remove('is-black');
      logo.classList.remove('is-black');
  
  gsap.to('.line-menu', {
        height: "0%",
        opacity: 1,
        duration: 0.2,
        ease: 'power3.inOut'
  });
  
  gsap.to(menuLeft, {
    x: "-100%",
    duration: 1.4,
    ease: 'power3.inOut'
  });
  
  gsap.to(menuRight, {
    x: "100%",
    duration: 1.4,
    ease: 'power3.inOut',
    onComplete: () => {
      
      menuWrapper.style.display = 'none';
      resetMenuAnimations();
      
    }
  });
}
});

const menuLinks = document.querySelectorAll('.button.is-menu-link');
const menuImages = document.querySelectorAll('.img-menu');

// Initial setup
menuImages.forEach(img => {
gsap.set(img, {
  opacity: img.dataset.menu === 'home' ? 1 : 0
});
});

menuLinks.forEach(link => {
link.addEventListener('mouseenter', () => {
  const menuId = link.dataset.menu;
  
  gsap.to(link, {
    opacity: 0.5,
    duration: 0.6
  });

  menuImages.forEach(img => {
    if(img.dataset.menu === menuId) {
      gsap.to(img, {
        opacity: 1,
        duration: 0.6
      });
    }
  });
});

link.addEventListener('mouseleave', () => {
  gsap.to(link, {
    opacity: 1,
    duration: 0.6
  });
  
  const menuId = link.dataset.menu;
  if(menuId !== 'home') {
    menuImages.forEach(img => {
      if(img.dataset.menu === menuId) {
        gsap.to(img, {
          opacity: 0,
          duration: 0.6
        });
      }
    });
  }
});
});