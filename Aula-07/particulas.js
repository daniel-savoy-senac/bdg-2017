class Particula{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.desenhar();
  }

  desenhar(){
    var eu = document.createElement("div");
    eu.style.left = this.x + "px";
    eu.style.bottom = this.y + "px";
    eu.style.width = (Math.random() * 100 + 10) +"px";
    document.body.appendChild(eu);
  }
}

function criar(evt){
  var y = window.innerHeight - evt.y;
  new Particula(evt.x, y);
}

window.addEventListener("mousemove",criar);
