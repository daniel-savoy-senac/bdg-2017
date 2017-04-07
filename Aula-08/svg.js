var points = [];
var poly;

function mover(p){
  p[0] += Math.random()*4-2;
  p[1] += Math.random()*4-2;
}

function animar(){
  points.forEach(p => mover(p));
  salvar();
  window.requestAnimationFrame(animar);
}

function mudar(evt){
  var novo = [evt.x, evt.y];
  points.push(novo);
  salvar();
}

function salvar(){
  var txt = points.map(p => p.join(",")).join(" ");
  poly.setAttribute("points", txt);
}

function iniciar(){
  poly = document.querySelector("polyline");
  window.addEventListener("mousemove", mudar);
  animar();
}

window.addEventListener("load", iniciar);
