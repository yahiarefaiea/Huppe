let canvas = null;
let ctx = null;
let wWidth = null;
let wHeight = null;
let noiseData = [];
let frame = 0;

function createNoise() {
  const colors = [0x14202020, 0x21202020, 0x28202020, 0x42202020];
  const idata = ctx.createImageData(wWidth, wHeight);
  const buffer32 = new Uint32Array(idata.data.buffer);

  for(let i = 0; i < buffer32.length; i++)
    if(Math.random() < 0.28) buffer32[i] = colors[Math.floor(Math.random() * 4)];

  noiseData[0] = idata;
}
function paintNoise() {
  ctx.putImageData(noiseData[frame], 0, 0);
}
function setup() {
  canvas = document.getElementById('noise');
  ctx = canvas.getContext('2d');
  wWidth = window.innerWidth;
  wHeight = window.innerHeight * 2;
  canvas.width = wWidth;
  canvas.height = wHeight;

  createNoise();
  paintNoise();
}

window.addEventListener('load', () => {
  const bodyObserver = new ResizeObserver(setup);
  const bodySelector = document.querySelector('body');
  bodyObserver.observe(bodySelector);
  setup();
});
