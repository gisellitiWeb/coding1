let peso = prompt("Coloque seu peso aqui: ")
let altura = prompt("Coloque sua altura aqui: ")
let imc = (altura*altura)/peso;
var imcForm = imc.toFixed(2);

if (imcForm > 18.5){
    console.log("Seu IMC é de " + imcForm + " Você está abaixo do peso")
}
else if(imcForm >= 18.5 <= 24.9){
    console.log("Seu IMC é de " + imcForm + " Você está no peso normal")
}
else if(imcForm >= 25 <= 29.9){
    console.log("Seu IMC é de " + imcForm + " Você está em excesso de peso")
}
else if(imcForm >= 30 <= 34.9){
    console.log("Seu IMC é de " + imcForm + " Você está na faixa de obesidade 1")
}
else if(imcForm >= 35 <= 39.9){
    console.log("Seu IMC é de " + imcForm + " Você está na faixa de obesidade 2")
}
else{
    console.log("Seu IMC é de " + imcForm + " Você está na faixa de obesidade 3")
}