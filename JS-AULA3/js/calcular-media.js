/* Operadores aritméticos:

    + Soma
    - Subtração
    * Multiplicação
    / Divisão
    ++ Incremento (Soma mais 1)
    -- Decremento (Subtrai menos 1)

    Operadores de atribuição:

    = Igual
    += Mais ou igual
    -= Menos ou igual
    /= Dividido ou igual
    *= Multiplicado ou igual

    Operadores de sequência:

    + (serve para concatenar valores
       (string ou variáveis))

    - (serve para subtrair valores
       (string ou variáveis))

    Operadores de comparação:

    RETORNA TRUE (VERDADEIRO) OU FALSE (FALSO)

    == (comparar 2 valores)
    === (comparar valores e tipo de dado)
    != (diferente) de valores apenas
    !== (comparar a diferença de valores e tipo de dado)

    < menor       > maior
    <= menor ou igual       >= maior ou igual
*/


// O botão começa escondido
<script src="../js/calcular-media.js"></script>
document.getElementById("novocalculo").style.display = "none";


function calcularMedia() {

    let nome = document.getElementById("nome").value;
    let disciplina = document.getElementById("disciplina").value;

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    let resultado = document.getElementById("resultado");


    // Verificar se todos os campos foram preenchidos
    if (
        nome == "" ||
        disciplina == "" ||
        document.getElementById("nota1").value == "" ||
        document.getElementById("nota2").value == "" ||
        document.getElementById("nota3").value == "" ||
        document.getElementById("nota4").value == ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }


    // Calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;


    // Identificar a disciplina
    let nomeDisciplina = "";

    if (disciplina === "FDD") {

        nomeDisciplina = "Fundamentos do Design Digital";

    } else if (disciplina === "FTDI") {

        nomeDisciplina = "Fotografia Digital";

    } else if (disciplina === "PRAAI") {

        nomeDisciplina = "Projetos de Áudio e Vídeo I";
    }


    // Verificar situação do aluno

    if (media >= 7) {

        /* InnerHTML indica que o JavaScript
           vai colocar conteúdo HTML dentro
           do elemento resultado. */

        resultado.innerHTML =
            "Aluno: " + nome + "<br>" +
            "Disciplina: " + nomeDisciplina + "<br>" +
            "Média: " + media.toFixed(1) + "<br>" +
            '<span class="aprovado">APROVADO</span>';

    } else if (media >= 6) {

        resultado.innerHTML =
            "Aluno: " + nome + "<br>" +
            "Disciplina: " + nomeDisciplina + "<br>" +
            "Média: " + media.toFixed(1) + "<br>" +
            '<span class="recuperacao">RECUPERAÇÃO</span>';

    } else {

        resultado.innerHTML =
            "Aluno: " + nome + "<br>" +
            "Disciplina: " + nomeDisciplina + "<br>" +
            "Média: " + media.toFixed(1) + "<br>" +
            '<span class="reprovado">REPROVADO</span>';
    }


    // Mostrar o botão "Calcular Novamente"
    document.getElementById("novocalculo").style.display = "block";
}


function calcularNovo() {

    // Limpar os campos
    document.getElementById("nome").value = "";
    document.getElementById("disciplina").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";


    // Voltar mensagem inicial
    document.getElementById("resultado").innerHTML =
        "<p>Preencha os dados acima e clique em calcular média</p>";


    // Esconder novamente o botão
    document.getElementById("novocalculo").style.display = "none";
}