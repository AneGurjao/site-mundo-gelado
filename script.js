
function limpar() {

	if (document.getElementById('campo').value!="") {

		document.getElementById('campo').value="";
		document.getElementById('campo2').value="";
		document.getElementById('campo3').value="";
	}
}


function enviar(){
	if (document.getElementById('campo').value == "") {
		alert ("Preencha seu Nome");
		return false;
	}else if (document.getElementById('campo2').value == ""){
		alert ("Preencha seu Email");
		return false;
	}else if (document.getElementById('campo3').value == ""){
		alert ("Escolha seu local de destino");
		return false;
	}else{
		 alert ("Cadastro realizado com sucesso!");
		 return true;
	}


} 

