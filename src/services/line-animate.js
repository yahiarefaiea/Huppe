import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

(function main() {
  const line = gsap.timeline({
    defaults: { duration: 1.2 },
    scrollTrigger: {
      trigger: "#section-hero__title",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
  line.fromTo(
    ".line-scroll",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );
})();
