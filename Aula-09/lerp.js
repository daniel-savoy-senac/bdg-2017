var t = 0;

function tempo(x,y){
  let w = window.innerWidth;
  return x/w;
}

function calcularTempo(e){
  t = tempo(e.x, e.y);
  console.log(t);
}

window.addEventListener("mousemove", calcularTempo)
