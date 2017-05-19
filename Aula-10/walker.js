var bebado;
var pos = {x:0,y:0};
var angulo = 135;
var objetivo = {x:500, y: 500};

function inicio(){
  bebado = document.querySelector("#bebado");
  seguir();
  //vagar();
}

function alvo(evt){
  objetivo.x = evt.x;
  objetivo.y = evt.y;
}

function rad(degree){
  return (degree/180)*Math.PI;
}

function deg(radian){
  return (radian*180)/Math.PI;
}

function sorteio(){
  let chance = 0.02;
  return (Math.random() < chance);
}

function limites(x,y,t,d,b,e){
  if(x < e || x >= d) return false;
  if(y < t || y >= b) return false;
  return true;
}

function vagar(){
  let direita = window.innerWidth - 200;
  let baixo = window.innerHeight - 200;
  let esquerda = 0;
  let topo = 0;


  let x = pos.x + Math.cos(rad(angulo))*5;
  let y = pos.y + Math.sin(rad(angulo))*5;

  if(!sorteio() && limites(x,y,topo, direita, baixo, esquerda)){
    pos.x = x;
    pos.y = y;
    bebado.style.left = `${pos.x}px`;
    bebado.style.top = `${pos.y}px`;
  } else {
    angulo = Math.random()*360;
  }


  window.requestAnimationFrame(vagar);
}

function seguir(){
  let direita = window.innerWidth - 200;
  let baixo = window.innerHeight - 200;
  let esquerda = 0;
  let topo = 0;

  let vet = { x: (objetivo.x - pos.x) ,
              y: (objetivo.y - pos.y)};

  angulo = Math.atan2(vet.y,vet.x);

  let x = pos.x + Math.cos(angulo)*5;
  let y = pos.y + Math.sin(angulo)*5;

  pos.x = x;
  pos.y = y;
  bebado.style.left = `${pos.x}px`;
  bebado.style.top = `${pos.y}px`;
  window.requestAnimationFrame(seguir);
}

window.addEventListener("mousemove",alvo);
window.addEventListener("load",inicio);
