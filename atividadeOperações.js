/* As quatro operações */

var num1 = prompt("Adicione o primeiro número: ");
var num2 = prompt("Adicione o segundo número: ");
var operação = prompt("Digite aqui a operação que deseja realizar: ");

switch (operação){
    case "soma":
        console.log(num1 + num2);
        break;
    case "subtração":
        console.log(num1 - num2)
        break;
    case "multiplicação":
        console.log(num1*num2);
        break;
    case "divisão":
        console.log(num1/num2);
        break;
    default:
        console.log("Essa operação não foi inserida ainda");
}