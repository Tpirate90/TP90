
/*
GAME DA ADIVINHAÇÃO v1.1
*/
//Declaração de variáveis
var valor,   //número sorteado
    palpite, //palpites dados para acertar
    vezes,   //contadora das tentativas
    usuario, //nome do usuário
    limite,  // valor limite para faixa de números
	nivel;   //nível para determinar o alcance múltiplo de 10 dos números sorteados
//Corpo principal
vezes  = 0;
limite = 0;
nivel  = 0;
alert("BEM-VINDO(A) AO SENSACIONAL JOGO DA ADIVINHAÇÃO!");
usuario = prompt("Qual é o seu nome?");
nivel = Number(prompt("escolha o nível")); 
limite = 10**nivel;
while(nivel <=0){
alert("nível inválido");
nivel = Number(prompt("escolha o nível")); 
}
alert(usuario + ", vamos jogar!!");
valor = Math.trunc(Math.random() * limite) + 1;

alert("Guardei um número entre 1 e " + limite + ". Tente adivinhar qual é!");
alert("Digite -1 quando quiser desistir");
//Laco principal
do {
    palpite = Number(prompt("Qual é o seu palpite?"));
    if (palpite != -1){
        if (valor > palpite)
            alert("Meu número é MAIOR que o seu. Tente de novo.");
        if (valor < palpite)
            alert("Meu número é MENOR que o seu. Tente de novo.");
        vezes++;
    }
} while (valor != palpite && palpite != -1);
if (palpite != -1) {
    alert("Você acertou, " + usuario + "! O número era mesmo " + valor);
	if(vezes ==1)
	{alert("Parabéns você acertou de primeira");}
	if(vezes <=2)
	{alert("Você quase acertou de primeira");}
    alert("Total de tentativas: " + vezes);
}
alert("*** GAME OVER ***");
*/
