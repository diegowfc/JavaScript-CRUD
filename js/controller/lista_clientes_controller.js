import { removeCliente } from '../service/cliente_service.js'

$(function() {
    removeLinha();
})

var corpoTabela = $(".clientes-container").find("tbody");

function novaLinha(id, nome, email) {
    var linha = $("<tr>");
    var nome = $("<td>").text(nome);
    var email = $("<td>").text(email);

    nome.attr("data-id", id);

    var acoes = $("<td> ul li:last").append(
        `<ul class="tabela-botoes-controle"> 
            <li><a href="../views/edita_cliente.html?id=${id}" class="btn btn-info">Editar</a></li> 
            <li><button class="btn btn-danger botao-deletar" type="button">Excluir</button></li>
        </ul`
    );

    linha.append(nome);
    linha.append(email);
    linha.append(acoes);


    return linha;
}

export function insereLinha(data) {
    $(data).each(function(elemento) {
        var linha = novaLinha(data[elemento].id, data[elemento].nome, data[elemento].email);
        corpoTabela.append(linha);
    })
}

function removeLinha() {

    $('.tabela').click(async(evento) => {
        var botaoDeletar = $(evento.target).hasClass('botao-deletar')
        if (botaoDeletar) {
            var id = $(evento.target).parent().parent().parent().parent().find('td[data-id]').data("id");
            await removeCliente(id);
        }
    })
}