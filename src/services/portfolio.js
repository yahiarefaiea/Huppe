const portfolioImgs = document.querySelectorAll(".portfolio");
const elementContainer = document.querySelector("#portfolio-container");

let imageContainer = null;
let timer = null;

portfolioImgs.forEach((element) => {
  element.addEventListener("mouseover", handleMouseOver);
  element.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(elementRef) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    const parentElementRef = elementRef.target.parentNode;
    const childElementRef = parentElementRef.children[0];
    const videoSrc = parentElementRef.attributes["data-videosrc"].nodeValue;

    if (!videoSrc) return;

    imageContainer = childElementRef;
    parentElementRef.removeChild(childElementRef);

    const videoRef = document.createElement("video");
    parentElementRef.appendChild(videoRef);
    videoRef.style.width = "100%";
    videoRef.setAttribute("autoplay", "");
    videoRef.setAttribute("muted", "");
    videoRef.setAttribute("loop", "");

    const sourceRef = document.createElement("source");
    sourceRef.setAttribute("src", videoSrc);
    sourceRef.setAttribute("type", "video/mp4");
    videoRef.appendChild(sourceRef);

    console.log("done");
  }, 400);
}

function handleMouseLeave(elementRef) {
  clearTimeout(timer);

  const parentElementRef = elementRef.target;
  const childElementRef = parentElementRef.children[0];
  const imageSrc = parentElementRef.attributes["data-imagesrc"].nodeValue;

  if (!imageSrc) return;

  parentElementRef.removeChild(childElementRef);

  const imageRef = document.createElement("img");
  imageRef.setAttribute("src", imageSrc);
  imageRef.style.width = "100%";

  parentElementRef.appendChild(imageRef);
}
