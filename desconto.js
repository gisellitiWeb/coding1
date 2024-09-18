var precoOriginal = prompt("Preço do produto: ");
var desconto = prompt("Qual desconto a ser aplicado? 25, 50, 75? ");

switch(desconto){
    case "25":
        var precoDescontado = precoOriginal*0.75;
        console.log("A calça preta brilhante vale " + precoOriginal + " mas com o desconto fica: " + precoDescontado)
        break
    case "50":
        var precoDescontado = precoOriginal*0.50;
        console.log("A blusa cropped verde vale " + precoOriginal + " mas com o desconto fica por apenas " + precoDescontado)
        break
    case "75":
        var precoDescontado = precoOriginal*0.25;
        console.log("A saia plissada preta custa " + precoOriginal + " mas com o desconto fica por só " + precoDescontado)
        break
    default:
        console.log("Esse método de desconto não existe!")
}