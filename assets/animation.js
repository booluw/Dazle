import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}


export const animation = {
  mounted() {
    const tl = gsap.timeline();

    tl.from(".heading", 1.8, {
      y: 100,
      ease: "power4.out", 
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })

    tl.from(".scale", .5, {
      scale: .7
    })

    gsap.utils.toArray(".scaleUp").forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          scrub: i,
        },
        scale: .7
      })
    })
    gsap.utils.toArray(".header").forEach((el, i) => {
      tl.from(el, 1.8, {
        scrollTrigger: {
          trigger: el,
          scrub: i
        },
        y: 100,
        ease: "power4.out", 
        skewY: 7,
        stagger: {
          amount: 0.3
        }
      })
    })
  },
}