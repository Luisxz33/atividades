var x = 5;
var y = 10; 
/* Também podemos fazer cálculos diretamente dentro do template String */
console.log (`O dobro de ${x} é ${x * 2}`);
console.log (`O dobro de ${y} é ${y * 2}`);

var soma = x + y;
console.log(soma)

soma += 5; /* soma = soma + 5 */

var cont = 0;
cont++; /* cont = cont + 1 */
console.log(cont); /* 1 */
cont++; /* 2 */
console.log(soma);