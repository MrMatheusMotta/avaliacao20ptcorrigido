// Produzindo uma calculadora avançada :
// histórico salvo na conversa chatGPT ProjetoCalculadoraJS_Docker

function voltarInicio(delay = 3000) {           // com o auxílio do chatGPT, em estudos, ele me sugeriu criar uma função que retornava ao início da página html, sendo que também pode ser usada pra levar pra algum trecho
    setTimeout(() => {                          // da sua página html ex : main, footer, etc .. se houverem outras páginas no seu site você pode escolher para onde retornar. 
        window.location.href = "index.html";    // Após criar a função, utilizei nas partes inerentes do código para chama-la.
    }, delay);
}
function calculadoraAvancada() {

    let operador = prompt("Digite o operador matemático ( + , - , * , / , % , **): ");
    if (operador === null) {    // quando o usuário clicar em “Cancelar” no prompt(), o valor retornado sera null. Se o seu código não trata isso, ele continuará pedindo indefinidamente.
        document.writeln("Operação cancelada.");  // null é um valor especial em JavaScript que representa "ausência de valor" ou "nenhum valor".
        voltarInicio();
        return;

    }

    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



    // while (operador !== "+" && operador !== "-" && operador !== "*" &&
    //     operador !== "/" && operador !== "%" && operador !== "**") {
    //     operador = prompt("Digite o operador matemático (+, -, *, /, %, **):");
    // if (operador !== "+" && operador !== "-" && operador !== "*" &&
    //     operador !== "/" && operador !== "%" && operador !== "**") {
    //     alert("Operador inválido! Tente novamente.");
    // Depois de ter feito este trecho do código, o chatGpt, ao corrigir pequenos erros, me ensinou sobre "includes" , uma forma mais clean de tratar o que existe dentro de um array ( ou string )
    //  includes() → verifica se algo está dentro de um conjunto.
    // !includes() → verifica se algo não está.
    //     Esse ! (exclamação) nega o resultado da verificação. Vamos explicar com clareza:
    // O que includes() faz:
    // ["+","-","*"].includes("+") // retorna true
    // ["+","-","*"].includes("/") // retorna true
    // ["+","-","*"].includes("?") // retorna false
    // Agora com !:
    // O ! inverte o resultado:
    // !true → false
    // !false → true
    // Aplicando no if:
    // if (!["+","-","*","/","%","**"].includes(operador)) {
    //     alert("Operador inválido!");
    // }
    // Significa:
    // "Se operador NÃO estiver dentro do array, então avise que é inválido."
    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    while (!["+", "-", "*", "/", "%", "**"].includes(operador)) {
        operador = prompt("Digite o operador matemático válido (+, -, *, /, %, **): ");
        if (operador === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
    }


    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // let num1 = Number(prompt("Digite um número: "));
    // if (num1 === null) {                    // caso o usuario clique em cancelar, sai do programa pois retorna null para num1, se não fosse declarada essa condição, o programa não encecrraria.
    //     document.writeln("Operação cancelada.");
    //     return;
    // }
    // while (isNaN(num1)) {
    //     num1 = Number(prompt("Digite um número válido: "));  // caso o valor digitado pelo usuario não seja um número, ele solicita novamente um numero valido!
    // }
    // let num2 = Number(prompt("Digite outro número: "));
    // if (num2 === null) {
    //     document.writeln("Operação cancelada.");
    //     return;
    // }
    // while (isNaN(num2)) {
    //     num2 = Number(prompt("Digite um número válido: "));
    //}
    // 
    // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //  Neste trecho do código verifiquei que se, em algum momento do programa o usuário quisesse cancelar, o Number(prompt) retornaria null, sendo que number null é 0, então ele não seguiria a lógica acima
    // sendo assim, o chatGPT me sugeriu criar uma variável para guardar o valor do prompt separadamente e depois converter essa variável em número, sendo assim, se o usuário clicar em cancelar, aparecerá a mensagem :
    // operação cancelada, visto que o prompt retornará null, e como ainda é uma string não converteu em 0 devido ao number ser declarado só depois.
    // prompt() pode retornar null (se o usuário clicar em "Cancelar").
    // Number(null) vira 0, então você perde a chance de detectar o cancelamento se converter diretamente.
    // Por isso, guarde o valor do prompt em uma variável separada, e só depois converta com Number().

    let entrada1 = prompt("Digite um número: ");
    if (entrada1 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let num1 = Number(entrada1);
    while (isNaN(num1)) {
        entrada1 = prompt("Digite um número válido: ");
        if (entrada1 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        num1 = Number(entrada1);
    }

    let entrada2 = prompt("Digite outro número: ");
    if (entrada2 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let num2 = Number(entrada2);
    while (isNaN(num2)) {
        entrada2 = prompt("Digite um número válido: ");
        if (entrada2 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        num2 = Number(entrada2);
    }


    let resultado = 0;
    if (operador == "+") {

        resultado = num1 + num2;
        document.writeln(`A soma de ${num1} com ${num2} é igual a ${resultado}`)
        voltarInicio();
    } else if (operador == "-") {

        resultado = num1 - num2;
        document.writeln(`A subtração de ${num1} com ${num2} é igual a ${resultado}`)
        voltarInicio();
    } else if (operador == "*") {

        resultado = num1 * num2;
        document.writeln(`A multiplicação de ${num1} com ${num2} é igual a ${resultado}`)
        voltarInicio();
    } else if (operador == "/") {

        resultado = num1 / num2;
        document.writeln(`A divisão de ${num1} com ${num2} é igual a ${resultado}`)
        voltarInicio();
    } else if (operador == "%") {

        resultado = num1 % num2;
        document.writeln(`O resto da divisão de ${num1} com ${num2} é igual a ${resultado}`)
        voltarInicio();
    } else {

        resultado = num1 ** num2;
        document.writeln(`${num1} elevado a ${num2} é igual a ${resultado}`)
        voltarInicio();
    }
}

function classificarIdade() {

    // Seguindo a mesma lógica da calculadora, refiz a entrada do dado, caso o usuário desista de fazer o teste! sendo assim, cancelar retorna null, que encerra o programa.
    // Se o usuário digitar um valor que não seja numerico também, solicita novamente um valor válido!
    // let idade = Number(prompt("Informe sua idade !"));
    // while (isNaN(idade) || idade <= 0) {
    //     idade = Number(prompt("Informe sua idade !"));
    //     if (idade !== Number)
    //         alert("Digite uma idade válida")
    // }

    let entrada1 = prompt("Digite sua idade! ");
    if (entrada1 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let idade = Number(entrada1);
    while (isNaN(idade)) {
        entrada1 = prompt("Digite uma idade válida: ");
        if (entrada1 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        idade = Number(entrada1);
    }

    if (idade <= 12) {
        document.writeln("Criança!")
        voltarInicio();

    } else if (idade > 12 && idade < 17) {
        document.writeln("Adolescente!")
        voltarInicio();

    } else if (idade >= 18 && idade < 59) {
        document.writeln("Adulto!")
        voltarInicio();

    } else {
        document.writeln("Idoso!")
        voltarInicio();

    }
}

function tabuadaPersonalizada() {


    // let num1 = Number(prompt("Digite o número para realizar a tabuada: "));
    // let num2 = Number(prompt("Digite o número até onde deseja realizar a tabuada :"));

    // while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
    //     alert("Digite um número válido e maior que  zero!");
    //     num1 = Number(prompt("Digite o número para realizar a tabuada: "));
    //     num2 = Number(prompt("Digite o número até onde deseja realizar a tabuada: "));

    // }

    let entrada1 = prompt("Digite o número para realizar a tabuada: ");
    if (entrada1 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let num1 = Number(entrada1);
    while (isNaN(num1) || (num1 === 0)) {
        entrada1 = prompt("Digite um número válido maior que zero: ");
        if (entrada1 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        num1 = Number(entrada1);
    }

    let entrada2 = prompt("Digite o número até onde deseja realizar a tabuada :");
    if (entrada2 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let num2 = Number(entrada2);
    while (isNaN(num2) || (num1 === 0)) {
        entrada2 = prompt("Digite um número válido maior que zero: ");
        if (entrada2 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        num2 = Number(entrada2);
    }


    for (let i = 1; i <= num2; i++) {
        let resultado = num1 * i

        document.writeln(`${num1} X ${i} = ${resultado} <br>`);
        voltarInicio();

    }

}

function somaParesWhile() {

    // let num1 = Number(prompt("Digite um número limite para somar todos os pares até ele: "));
    // Seguindo a mesma lógica da calculadora, refiz a entrada do dado, caso o usuário desista de fazer o teste! sendo assim, cancelar retorna null, que encerra o programa.
    // Se o usuário digitar um valor que não seja numerico também solicita novamente um valor válido!

    let entrada1 = prompt("Digite um número limite para somar todos os pares até ele:");
    if (entrada1 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let num1 = Number(entrada1);
    while (isNaN(num1) || (num1 === 0)) {
        entrada1 = prompt("Digite um número válido maior que zero: ");
        if (entrada1 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        num1 = Number(entrada1);
    }
    let soma = 0;
    let contador = 2;

    // while (isNaN(num1) || (num1 === 0)) {
    //     alert("Digite um número válido e maior que 0")
    //     num1 = Number(prompt("Digite um número limite para somar todos os pares até ele: "));
    // }

    while (contador <= num1) {

        if ((contador) % 2 === 0) {
            soma += contador

        }
        contador += 2
    }
    document.writeln(`A soma dos pares ate ${num1} é ${soma}`)
    voltarInicio();

}

function validaSenha() {
    const senhaverdadeira = "senai123";
    let tentativas = 0;

    while (tentativas < 3) {
        let senhausuario = prompt("Digite sua senha !");
        if (senhausuario === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;


        } else if (senhaverdadeira === senhausuario) {
            document.writeln("Acesso Permitido!")
            voltarInicio();
            return;
        } else {
            alert("Senha incorreta, tente novamente !")
            tentativas++;
        }
    }
    alert("USUÁRIO BLOQUEADO!")
    document.writeln("Acesso bloqueado após 3 tentativas!")
    voltarInicio();


}

function calcularFatorial() {

    let entrada1 = prompt("Digite um número para calcular o fatorial!");
    if (entrada1 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let num1 = Number(entrada1);
    while (isNaN(num1)) {
        entrada1 = prompt("Digite um número válido: ");
        if (entrada1 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        num1 = Number(entrada1);
    }

    let fatorial = 1
    for (let i = 1; i <= num1; i++) {
        fatorial *= i

    }
    document.writeln(`O fatorial de ${num1} é ${fatorial}`);
    voltarInicio();

}

function verificarPrimo() {

    let entrada1 = prompt("Digite um número para saber se é primo");
    if (entrada1 === null) {
        document.writeln("Operação cancelada.");
        voltarInicio();
        return;
    }
    let num1 = Number(entrada1);
    while (isNaN(num1)) {
        entrada1 = prompt("Digite um número válido: ");
        if (entrada1 === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }
        num1 = Number(entrada1);
    }

    if (num1 % 2 === 0) {
        document.writeln(`${num1} não é número primo!`)
    } else {
        document.writeln(`${num1} é número primo!`)
    }
    voltarInicio();
}

function mediaAritmetica() {

    let soma = 0;
    let contador = 0;
    let entrada;

    while (true) {
        entrada = prompt("Digite um número para calcular a média ou 'fim' para encerrar:");

        if (entrada === null) {
            document.writeln("Operação cancelada.");
            voltarInicio();
            return;
        }

        if (entrada.toLowerCase() === "fim") {
            break;
        }

        let numero = Number(entrada);

        if (isNaN(numero)) {
            alert("Entrada inválida. Digite um número ou 'fim'.");
            continue;
        }

        soma += numero;
        contador++;
    }

    if (contador === 0) {
        document.writeln("Nenhum número válido foi digitado.");
    } else {
        let media = soma / contador;
        document.writeln(`A média dos ${contador} números digitados é: ${media.toFixed(2)}`);
    }

    voltarInicio();
}