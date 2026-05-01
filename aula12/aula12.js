//tipo Objeto no Javascript
//Objeto é uma estrutura que armazena informações em formato de chave: valor
const guilherme = {
sobrenome: "Alves",
idade: 19,
curso: "Sistemas de Informação"
};

//console.log(guilherme.curso);

const aluno2 = {
    nome: "Maria Eduarda",
    matricula: 2103,
    ativo: false
};

const aluno3 = {
    nome: "Mario Bros",
    matricula: 2103,
    ativo: true
};

if(aluno2.ativo) {
    console.log(`Aluna ${aluno2.nome} está com a matrícula ativa`);
} else {
      console.log(`Aluna ${aluno2.nome} não está com a matrícula ativa`);
}