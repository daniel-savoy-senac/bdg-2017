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

function animar(e){
  t = tempo(e.x, e.y);
  // movendo de (10,200) até (400,100)
  let px = lerp(10,400,t);
  let py = lerp(200,100,t);
  let angulo = lerp(0,720,t);
  bloco1.style.left = px + "px";
  bloco1.style.top = py + "px";
  bloco1.style.transform = `rotate(${angulo}deg)`;
}

function lerp(a,b,t){
  return (1-t) * a + t * b;
}

window.addEventListener("load", iniciar);
window.addEventListener("mousemove", animar);
