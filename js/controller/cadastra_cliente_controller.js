import { criaProfile } from '../service/cliente_service.js'

$(function() {
    insereCliente();
})

export function insereCliente() {

    $("#form-cadastro").submit(function() {

        var cliente = $("#form-cadastro").serializeArray();

        criaProfile(cliente[0].value, cliente[1].value); //0 - nome | 1 - email
    });

}