function girar(e){
	var bone = e.target.parentNode;
	if(bone.tagName.toUpperCase() != "SECTION") return;
	
	var a = Math.random() * 120 - 60;
	bone.style.transform = "rotate("+a+"deg)";
}

function iniciar(){
	var bones = document.querySelector(".bones");
	bones.addEventListener("click",girar);
}

window.addEventListener("load",iniciar);