import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function textAnimate(index) {
  const text = gsap.timeline({
    defaults: { duration: 1.2 },
    scrollTrigger: {
      trigger: ".section-about",
      start: "top center",
      end: "bottom bottom",
      scrub: true,
    },
  });
  text.fromTo(
    `.article-${index}`,
    {
      opacity: 0,
      x: index == 1 ? -200 : 200,
    },
    {
      opacity: 1,
      x: 0,
    }
  );
}

(function main() {
  textAnimate(1);
  textAnimate(2);
})();
