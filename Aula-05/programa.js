var lista = [
  "japao",
  "franca"
];
var contador = 0;

function mudarBandeira(){
  document.body.className = lista[contador];
  if(contador < lista.length-1){
    contador = contador + 1;
  } else {
    contador = 0;
  }
}

window.addEventListener("click", mudarBandeira);
