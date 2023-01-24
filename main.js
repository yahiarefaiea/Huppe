import "./src/styles/pages/home.scss";

import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

// import "./src/services/text-animate";
// import "./src/services/article-animate";
import "./src/plugins/swiper";
// import "./src/services/line-animate";
