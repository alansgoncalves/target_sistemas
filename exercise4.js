// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentuais(dados) {
    const total = Object.values(dados).reduce((acc, val) => acc + val, 0);

    const percentuais = {};
    for (const estado in dados) {
        percentuais[estado] = ((dados[estado] / total) * 100).toFixed(2) + "%";
    }

    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoMensal);
console.log("Percentuais por estado:", percentuais);
