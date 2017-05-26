var t = 0;
var bloco1, bloco2, btn1, btn2;

function iniciar(){
  bloco1 = document.querySelector("#bloco1");
  bloco2 = document.querySelector("#bloco2");
  btn1 = document.querySelector("button:nth-of-type(1)");
  btn2 = document.querySelector("button:nth-of-type(2)");
  btn1.addEventListener("click", ()=>rolar(2000));
  btn2.addEventListener("click", ()=>rolar(0));
}

function animar(){
  t = temporizar();
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

window.addEventListener("load", iniciar);
window.addEventListener("scroll", animar);
