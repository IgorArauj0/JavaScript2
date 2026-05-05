//Criação de um objeto chamado "usuario"
//ele irá armazenar informações sobre os usuários

const usuario = {
    nome: "Pelé",
    idade: 18,
    selecao: "Brasil"
}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Brasileiro";
const mensagemDeBoasVindas2 = "Bem vindo, torcedor Argentino";
const mensagemDeBoasVindasGeral = "Bem vindo, amante do esporte";

//estrutura de decisão usando operador ternário encadeado
//Ele funciona como if | else | else if

usuario.selecao === "Brasil" && usuario.idade >= 18
    ? console.log(mensagemDeBoasVindas1) //Se for torcedor do Brasil e maior de 18
    : usuario.selecao === "Argentina" && usuario.idade >= 18
        ? console.log(mensagemDeBoasVindas2) //Se for torcedor argentino e maior de idade
        
        : usuario.idade >= 18
            ? console.log(mensagemDeBoasVindasGeral)
            : console.log("Não vendemos ingressos para menores de 18 anos.");

const mensagemDeEscolha = "Clique no setor a qual deseja comprar seu ingresso";
const mensagemFinal = "Divirta-se no Maracanã";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);

