// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
// valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(num) {
    if (num === 0 || num === 1) return true;

    let prev = 0, curr = 1, next = prev + curr;

    while (next <= num) {
        if (next === num) return true;
        prev = curr;
        curr = next;
        next = prev + curr;
    }

    return false;
}

const numero = 21; 
console.log(`O número ${numero} ${isFibonacci(numero) ? "pertence" : "não pertence"} à sequência de Fibonacci.`);
// R: Pertence à sequência de Fibonacci.
