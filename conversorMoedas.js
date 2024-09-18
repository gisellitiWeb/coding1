/* Conversor de moedas */
let pergunta = prompt("Indique qual moeda para converter a real ");
let quant = prompt("Quanto dessa moeda ");
quant = parseFloat(quant);
let real = 0;

switch (pergunta){
    case "dólar":
        real = quant*5.48;
        real = real.toFixed(2)
        console.log(quant + " dólar americano equivale a " + real + " reais brasileiros");
        break;
    case "euro":
        real = quant*6.09;
        real = real.toFixed(2)
        console.log(quant + " euro equivale a " + real + " reais brasileiros");
        break;
    case "iene":
        real = quant*0.039;
        real = real.toFixed(2)
        console.log(quant + " iene(s) equivale a " + real + " reais brasileiros");
        break;
    case "Yuan":
        real = quant*0.78;
        real = real.toFixed(2)
        console.log(quant + " Yuan chinês equivale a " + real + " reais brasileiros");
        break;
    case "peso argentino":
        real = quant*0.0057;
        real = real.toFixed(2)
         console.log(quant + " peso argentino(s) equivale a " + real + " reais brasileiros");
        break;
    case "peso filipino":
        real = quant*0.098;
        real = real.toFixed(2)
        console.log(quant + " peso filipino(s) equivale a " + real + " reais brasileiros");
        break;
    default:
        console.log("a moeda escolhida não está presente no conversor ou não existe!")
}