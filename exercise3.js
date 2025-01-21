// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamento = [
    { dia: 1, valor: 200.0 },
    { dia: 2, valor: 5.0 },
    { dia: 3, valor: 370.0 },
    { dia: 4, valor: 43.0 },
    { dia: 5, valor: 100.0 }
];

function calcularFaturamento(dados) {
    const diasValidos = dados.filter(d => d.valor > 0);
    const valores = diasValidos.map(d => d.valor);

    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / diasValidos.length;
    const diasAcimaMedia = diasValidos.filter(d => d.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaMedia
    };
}

const resultado = calcularFaturamento(faturamento);
console.log("Menor valor:", resultado.menorValor);
console.log("Maior valor:", resultado.maiorValor);
console.log("Dias acima da média:", resultado.diasAcimaMedia);

