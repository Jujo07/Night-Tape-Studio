/* =============================================
   NIGHT TAPE STUDIO — script.js
   ============================================= */

// ── Señal rotatoria en el header ──
const signals = ['WEAK', 'LOST', '-----', 'DECAY', 'FAINT', 'WEAK'];
let sigIndex = 0;
const sigEl = document.getElementById('sig');

setInterval(() => {
  sigIndex = (sigIndex + 1) % signals.length;
  sigEl.textContent = signals[sigIndex];
}, 2200);

// ── Glitch bar horizontal aleatoria ──
const gbar = document.getElementById('gbar');

setInterval(() => {
  gbar.style.top     = (Math.random() * (window.innerHeight - 40) + 20) + 'px';
  gbar.style.opacity = '0.65';
  gbar.style.height  = (Math.random() > 0.6 ? '3px' : '1px');
  setTimeout(() => { gbar.style.opacity = '0'; }, 90);
}, 800);

function startMusic(){
  document.getElementById("music").play();
  document.getElementById("enter").style.display = "none";
}


// ── Micro-shake del body ──
setInterval(() => {
  const offsetX = (Math.random() - 0.5) * 2.5;
  document.body.style.transform = `translateX(${offsetX}px)`;
  setTimeout(() => { document.body.style.transform = ''; }, 70);
}, 4000);

// ── Glitch flash de color en el título ──
const title = document.querySelector('.title');
setInterval(() => {
  if (Math.random() > 0.7) {
    title.style.filter = 'hue-rotate(30deg) brightness(1.3)';
    setTimeout(() => { title.style.filter = ''; }, 60);
  }
}, 2500);
