const usuario = {
    nome: "Pelé",
    idade: 16,
    selecao: "Brasil"
}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor Brasileiro";

const mensagemDeBoasVindas2 = "Bem vindo, torcedor Argentino";

const mensagemDeBoasVindasGeral = "Bem vindo, amante do esporte";

const mensagemDeEscolha = "Clique no setor a qual deseja comprar seu ingresso";

const mensagemFinal = "Divirta-se no Maracanã";


//   ? → “se a condição for verdadeira, faça isso”
//   : → “senão (caso seja falsa), faça aquilo”
usuario.idade < 18
? console.log("Não vendemos ingressos para menores de 18 anos")
//digamos que a idade seja maior ou igual a 18
: (
    usuario.selecao === "Brasil"
    ? console.log(mensagemDeBoasVindas1)
    : usuario.selecao === "Argentina"
    ? console.log(mensagemDeBoasVindas2)
    : console.log(mensagemDeBoasVindasGeral),

    console.log(mensagemDeEscolha),
    console.log(mensagemFinal)
);
