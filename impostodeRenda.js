let salário = prompt("insira seu salário bruto aqui: ");

if (salário < 2259.20){
    console.log("Você está na faixa de isenção, você não precisa pagar o Imposto de Renda, porém precisa apresentar sua declaração a receita federal!")
}
else if (salário >= 2259.21 <= 2826.65){
    var imposto1 = salário*0.075;
    var impostoFormat = imposto1.toFixed(2);
    console.log("Você precisa pagar " + impostoFormat + " a receita federal!");
} 
else if (salário >= 2826.66 <= 3751.05){
    imposto = salário*0.15;
    impostoFormat = imposto.toFixed(2);
    console.log("Você precisa pagar " + impostoFormat + " a receita federal!");
}
else if (salário >= 3751.06 <= 4.664,68){
    imposto = salário*0.225;
    impostoFormat = imposto.toFixed(2);
    console.log("Você precisa pagar " + impostoFormat + " a receita federal!");
}
else{
    imposto = salário*0.275;
    impostoFormat = imposto.toFixed(2);
    console.log("Você precisa pagar " + impostoFormat + " a receita federal!");
}