/**
 * Confirmação de exclusão de um contato
 * 
 * @author Lucas Borges
 * @param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato ?")
	if (resposta === true) {
		//alert(idcon) - teste de recebimento

		//Enviando a requisição ao servlet
		window.location.href = "delete?idcon=" + idcon
	}
}