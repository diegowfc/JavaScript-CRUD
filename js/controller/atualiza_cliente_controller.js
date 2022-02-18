import { detalhaCliente } from '../service/cliente_service.js'
import { atualizaCliente } from '../service/cliente_service.js'

$(function() {
    getURL();
})

var url = new URL(window.location)
var id = url.searchParams.get('id');
var nome = $("#nome-editar");
var email = $("#email-editar");

function getURL() {
    detalhaCliente(id);
}


export function exibeCliente(data) {

    nome.val(data.nome);
    email.val(data.email);

    salvaAlteracao();
}

function salvaAlteracao() {
    var form = $(".form-editar");
    form.submit(function(evento) {
        evento.preventDefault();

        atualizaCliente(id, nome.val(), email.val()).done(window.location.href = "../views/edicao_concluida.html")

    })
}