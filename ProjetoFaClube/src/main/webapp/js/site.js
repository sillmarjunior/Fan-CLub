function validaFaleConosco() {
	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

	if (!expRegNome.test(nome)) {
		alert("Preencha o campo Nome corretamente.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	
	var nasci = document.frmfaleconosco.nascimento.value;
	var expRegNasci = new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$");

	if (!expRegNasci.test(nasci)) {
		alert("Preencha o campo Nascimento corretamente.");
		document.frmfaleconosco.nascimento.focus();
		return false;
	}
	
	var email = document.frmfaleconosco.txtemail.value;
	var expRegEmail = new RegExp("^[A-zÀ-ü]{3,}[@]{1}[A-zÀ-ü]{3,}$")

	if (!expRegEmail.test(email)) {
		alert("Preencha o campo E-mail corretamente.");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}
	
	var fone = document.frmfaleconosco.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[0-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$")
	
	if (!expRegFone.test(fone)) {
		alert("Preencha o campo, Telefone corretamente.");
		document.frmfaleconosco.txtfone.focus();
		return false;
	} else if (document.frmfaleconosco.txtsenha.value == "") {
		alert("Preencha o campo, Senha.");
		document.frmfaleconosco.txtsenha.focus();
		return false;
	} else if (document.frmfaleconosco.genero.value == "") {
		alert("Selecione um dos campos, Gênero");
		document.frmfaleconosco.genero.focus();
		return false;
	}else if(!document.getElementById("caixa").checked){
		alert("Selecione o campo Desejo participar...");
	}
	return true;
}