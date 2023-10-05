/**
 * Validação de formulário
 * @author Lucas Borges
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('Preencha o campo Nome')
		frmContato.nome.focus() //Foca o cursor em cima do campo
		return false // Não retorna para camada controller
	} else if (fone === "") {
		alert('Preencha o campo Fone')
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit() // Envia os dados para Controller
	}
}