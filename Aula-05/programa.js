var lista = [
  "cena1","cena2","cena3"
];
var contador = 0;

function mudar(){
  document.body.className = lista[contador];
  if(contador < lista.length-1){
    contador = contador + 1;
  } else {
    contador = 0;
  }
}

window.addEventListener("click", mudar);
mudar();
