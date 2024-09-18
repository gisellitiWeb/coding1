/* Cálculo de média*/
let nota1 = prompt("adicione a primeira nota do aluno: ");
let nota2 = prompt("adicione a segunda nota do aluno: ");
let nota3 = prompt("adicione a terceira nota do aluno: ");
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
var media = (nota1 + nota2 + nota3)/3
var mediaFormatada = media.toFixed(2)
console.log("a média do aluno é: " + mediaFormatada)