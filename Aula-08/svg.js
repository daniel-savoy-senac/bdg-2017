var poly, atual;

function iniciar(){
  poly = document.querySelector("polyline");
  window.addEventListener("mousemove", mudar);
  animar();
}

function mudar(evt){
  var x = evt.x;
  var y = evt.y;
  var txt = x+","+y;
  atual = poly.getAttribute("points");
  atual = atual ? atual.split(" ") : [];
  atual.push(txt);
  atual = atual.join(" ");
  poly.setAttribute("points", atual);
}

function animar(){
  atual = poly.getAttribute("points");
  if(!atual) return window.requestAnimationFrame(animar);;
  var points = atual
    .split(" ")
    .map(a=>a.split(",")
      .map(b=>Number(b)+Math.random()*4-2)
      .join(",")
    ).join(" ");
  poly.setAttribute("points", points);
  window.requestAnimationFrame(animar);
}

window.addEventListener("load", iniciar);
