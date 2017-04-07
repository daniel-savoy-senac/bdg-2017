function mudar(evt){
  var poly = document.querySelector("polygon");
  var x = evt.x;
  var y = evt.y;
  var txt = x+","+y;
  var atual = poly.getAttribute("points");
  atual = atual +" "+txt;
  poly.setAttribute("points", atual);
}


window.addEventListener("click", mudar);
