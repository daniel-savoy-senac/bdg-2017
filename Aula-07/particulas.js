var T = 0;

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
    //var hue = Math.random() * 360;
    //var hue = this.x/window.innerWidth * 360;
    var hue = ++T % 360;
    eu.style.backgroundColor = "hsl("+hue+",100%,50%)";
    document.body.appendChild(eu);
  }
}

function criar(evt){
  var y = window.innerHeight - evt.y;
  new Particula(evt.x, y);
}

window.addEventListener("mousemove",criar);
