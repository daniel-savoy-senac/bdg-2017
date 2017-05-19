function temporizar(){
	var r = window.pageYOffset;
	var a = window.innerHeight;
	var d = document.body.scrollHeight;
	let t = r/(d-a);
  return t;
}

function lerp(a,b,t){
  return (1-t) * a + t * b;
}

function clamp(t){
  if(t>1) return 1;
  if(t<0) return 0;
  return t;
}

function cena(i,f,t){
  let delta = f - i;
  let t2 = (t - i) / delta;
  return clamp(t2);
}
