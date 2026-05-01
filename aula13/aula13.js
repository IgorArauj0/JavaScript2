//Operador Ternário: Forma curta de escrever if|else para decidir entre dois valores com base em uma condição. Estádio de Futebol.

const usuario = {
    nome: "Pedro",
    idade: 30,
    selecao: "Brasil"
}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Brasileiro";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Argentino";

if(usuario.selecao === 'Brasil') {
    console.log(mensagemDeBoasVindas1);
} else {
    console.log(mensagemDeBoasVindas2)
}