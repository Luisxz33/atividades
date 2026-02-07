var nota1 = 7.5;
var nota2 = 6.0;
var nota3 = 8.0;
var nota4 = 5.5;
var situação = '';

var media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log (media)

if (media >= 7) {
    situação = 'Aprovado';
} else if (media < 5) {
    situação = 'Reprovado';
} else {
    situação = 'Recuperação'
}

console.log (`A situação do aluno é: ${situação}`);