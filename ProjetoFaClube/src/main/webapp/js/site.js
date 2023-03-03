function validaFaleConosco() {
	if (document.frmfaleconosco.txtnome.value == "") {
		alert("Preencha o campo Nome.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	} else if (document.frmfaleconosco.nascimento.value == "") {
		alert("Preencha o campo, Nascimento.");
		document.frmfaleconosco.nascimento.focus();
		return false;
	} else if (document.frmfaleconosco.txtemail.value == "") {
		alert("Preencha o campo E-mail.");
		document.frmfaleconosco.txtemail.focus();
		return false;
	} else if (document.frmfaleconosco.txtfone.value == "") {
		alert("Preencha o campo, Telefone.");
		document.frmfaleconosco.txtfone.focus();
		return false;
	} else if (document.frmfaleconosco.txtsenha.value == "") {
		alert("Preencha o campo, Senha.");
		document.frmfaleconosco.txtsenha.focus();
		return false;
	}else if (document.frmfaleconosco.genero.value == "") {
		alert("Selecione um dos campos, Gênero");
		document.frmfaleconosco.genero.focus();
		return false;
	}else if (document.frmfaleconosco.caixa.checked) {
		alert("Selecione o campo, Desejo participar...");
		document.frmfaleconosco.caixa.focus();
		return false;
	}
	return true;
}