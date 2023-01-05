import { gsap } from "gsap";

const containerRef = document.querySelector("#main-header");
const titls = [
  "we raise your value",
  "Catalyst for change",
  "Development strategist",
  "YOUR CHANGE AGENT",
];

function textAnimate(text, index) {
  if (!containerRef) return;
  const elementRef = document.createElement("h2");
  elementRef.textContent = text;
  elementRef.classList.add(`section-hero__subtitle`);
  elementRef.classList.add(`moveUp-${index}`);
  containerRef.appendChild(elementRef);

  gsap.fromTo(
    `.moveUp-${index}`,
    {
      opacity: 0,
      y: 30,
    },
    {
      duration: 1.3,
      opacity: 1,
      delay: index - 0.5,
      y: 0,
    }
  );

  if (index === titls.length) return;
  setTimeout(() => elementRef.remove(), index * 1100);
}

(function main() {
  titls.forEach((text, index) => {
    textAnimate(text, index + 1);
  });
})();
