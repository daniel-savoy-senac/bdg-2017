class Particula{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.desenhar();
  }

  this.desenhar = function(){
    var eu = document.createElement("div");
    eu.style.left = this.x + "px";
    eu.style.bottom = this.y + "px";
    document.body.appendChild(eu);
  }
}
