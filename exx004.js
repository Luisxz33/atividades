/* /* for - Use quando o número de iterações é conhecido */
for (c = 0; c <=2; c++) {
    for (cont = 0; cont <= 10; cont++) {
        console.log (`Contador do "FOR": ${c} . ${cont}`);
    }
}

/* /* while - Use quando o número de iterações não é conhecido  */
var feijãozinho = 0;
while (feijãozinho <= 20) {
    console.log (`Contador do WHILE": ${feijãozinho}`);
    feijãozinho++;
}
/* do while - Use quando o número de iterações não é conhecido e é necessário que o bloco de código seja executdo pelo menos uma vez  */ 
var cabrito = 0;
do {
    console.log(`Contador do "DO WHILE": ${cabrito}`);
    cabrito++; /* cabrito = cabrito + 1 */
} while (cabrito <= 25);