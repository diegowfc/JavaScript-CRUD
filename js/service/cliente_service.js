import { insereLinha } from '../controller/lista_clientes_controller.js'
import { insereCliente } from '../controller/cadastra_cliente_controller.js'
import { exibeCliente } from '../controller/atualiza_cliente_controller.js'

$(function() {
    getCliente();
})

function getCliente() {
    $.get('http://localhost:3000/profile').done(insereLinha).fail(function() {
        window.location.href = '../views/erro.html';
    });
}

export function criaProfile(nome, email) {

    var profile = {
        nome: nome,
        email: email
    }

    $.post(("http://localhost:3000/profile"), profile).fail(function() {
        throw new Error('Não foi possível criar um novo cliente');
    });
}

export function removeCliente(id) {

    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).fail(function() {
        throw new Error('Não foi possível remover um cliente');
    });
}

export function detalhaCliente(id) {

    if (id != null) {
        $.get(`http://localhost:3000/profile/${id}`).done(exibeCliente).fail(function() {
            throw new Error('Não foi possível listar os clientes');
        });;
    }
}

export function atualizaCliente(id, nome, email) {

    return fetch(`http://localhost:3000/profile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email
            })
        })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw new Error('Não foi possível atualizar o cliente');
            }

        })
}