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

/* Rolagem Automatica */
let _destino = 0;
let _ativo = false;
let _velocidade = 10;

function rolar(d,v=10){
	_destino = d;
	_velocidade = v;
	if(!_ativo){
		_ativo = true;
		acionar_rolagem();
	}
}

function acionar_rolagem(){
	let pos = window.pageYOffset;
	let diff = Math.abs(_destino - pos);
	let dir = Math.sign(_destino - pos);
	let step = diff < _velocidade ? diff : _velocidade;
	if(step > 0) window.scrollTo(0,pos+dir*step);
	else _ativo = false;
	if(_ativo) window.requestAnimationFrame(acionar_rolagem);
}
