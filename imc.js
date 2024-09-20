let altura = prompt("Coloque sua altura aqui: ")
let peso = prompt("Coloque seu peso aqui: ")
let imc = peso/(altura*altura);
var imcFormat = imc.toFixed(2)

if (imcFormat < 18.5){
    console.log("Seu IMC é de " + imcFormat + " Você está abaixo do peso")
}
else if(imcFormat >=18.5 && imcFormat <= 24.99){
    console.log("Seu IMC é de " + imcFormat + " Você está no peso normal")
}
else if(imcFormat >= 25 && imcFormat <= 29.9){
    console.log("Seu IMC é de " + imcFormat + " Você está em excesso de peso")
}
else if(imcFormat >= 30 && imcFormat<= 34.9){
    console.log("Seu IMC é de " + imcFormat + " Você está na faixa de obesidade 1")
}
else if(imcFormat >= 35 && imcFormat <= 39.9){
    console.log("Seu IMC é de " + imcFormat + " Você está na faixa de obesidade 2")
}
else{
    console.log("Seu IMC é de " + imcFormat + " Você está na faixa de obesidade 3")
}