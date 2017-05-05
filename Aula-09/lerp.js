var t = 0;
var bloco1, bloco2;

function iniciar(){
  bloco1 = document.querySelector("#bloco1");
  bloco2 = document.querySelector("#bloco2");
}

function tempo(x,y){
  let w = window.innerWidth;
  return x/w;
}

function cena(i,f,t){
  let delta = f - i;
  let t2 = (t - i) / delta;
  return clamp(t2);
}

function animar(e){
  t = tempo(e.x, e.y);
  // movendo de (10,200) até (400,100)
  let px = lerp(10,400,t);
  let py = lerp(200,100,t);
  let angulo = lerp(0,720,t);
  bloco1.style.left = px + "px";
  bloco1.style.top = py + "px";
  bloco1.style.transform = `rotate(${angulo}deg)`;

  let t2 = cena(.5, .8, t);
  let cor = lerp(0,100,t2);
  bloco2.style.background = `hsl(240,100%,${cor}%)`;
}

function lerp(a,b,t){
  return (1-t) * a + t * b;
}

function clamp(t){
  if(t>1) return 1;
  if(t<0) return 0;
  return t;
}

window.addEventListener("load", iniciar);
window.addEventListener("mousemove", animar);
