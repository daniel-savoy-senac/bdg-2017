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
    document.body.appendChild(eu);
  }
}
