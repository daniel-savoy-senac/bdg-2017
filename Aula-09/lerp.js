var t = 0;

function tempo(x,y){
  let w = window.innerWidth;
  return x/w;
}

function animar(e){
  t = tempo(e.x, e.y);
  // movendo de (10,200) até (400,100)
  let px = lerp(10,400,t);
  let py = lerp(200,100,t);
  console.log(`X:${px}, Y:${py}`);
}

function lerp(a,b,t){
  return (1-t) * a + t * b;
}

window.addEventListener("mousemove", animar)
