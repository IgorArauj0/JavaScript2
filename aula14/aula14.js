//Operador Ternário: Forma curta de escrever if|else para decidir entre dois valores com base em uma condição. Estádio de Futebol.

const usuario = {
    nome: "Pedro",
    idade: 30,
    selecao: "Brasil"
}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Brasileiro";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Argentino";

usuario.selecao === "Brasil"
? console.log(mensagemDeBoasVindas1)
: console.log(mensagemDeBoasVindas2)
//   ? → “se a condição for verdadeira, faça isso”
//   : → “senão (caso seja falsa), faça aquilo”


const mensagemDeEscolha = "Clique no setor a qual deseja comprar seu ingresso";
const mensagemFinal = "Divirta-se no Maracanã";
console.log(mensagemDeEscolha);
console.log(mensagemFinal);


