const result = document.querySelector('.resultado')

function semTexto(){
	alert('Precisa haver algum texto para realizar a operação!')
}

function copiar(){
	navigator.clipboard.writeText(result.textContent)
}

function retiraCarateres(){
	texto = document.querySelector("textarea").value.toLowerCase();
	textoEncriptado = texto;
	textoEncriptado = textoEncriptado.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a')
  	textoEncriptado = textoEncriptado.replace(new RegExp('[ÉÈÊ]','gi'), 'e')
  	textoEncriptado = textoEncriptado.replace(new RegExp('[ÍÌÎ]','gi'), 'i')
  	textoEncriptado = textoEncriptado.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o')
  	textoEncriptado = textoEncriptado.replace(new RegExp('[ÚÙÛ]','gi'), 'u')
  	textoEncriptado = textoEncriptado.replace(new RegExp('[Ç]','gi'), 'c')
  return textoEncriptado;                  
}

function encripta(){
	texto = document.querySelector("textarea").value.toLowerCase();
	if(texto != ''){
		document.getElementById("msg_inicial").style.display = "none";
		document.getElementById("encriptado").style.display = "flex";
		document.getElementById("copy").style.display = "block";
		retiraCarateres();

		textoEncriptado = textoEncriptado.replace(/e/gim, "enter");
		textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
		textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
		textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
		textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");
		result.textContent = textoEncriptado;
	}else{
		semTexto();
	}
}

function desencripta(){
	texto = document.querySelector("textarea").value.toLowerCase();
	if(texto != ''){
		document.getElementById("msg_inicial").style.display = "none";
		document.getElementById("encriptado").style.display = "flex";
		document.getElementById("copy").style.display = "block";
		retiraCarateres();

		textoEncriptado = textoEncriptado.replace(/enter/gim, "e");
		textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
		textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
		textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
		textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");
		result.textContent = textoEncriptado;
	}else{
		semTexto();
	}
}