//COPIE O CODIGO ABAIXO E COLE NO CONSOLE DO NAVEGADOR NA PAGINA DOS MODULOS DO CURSO

//pegar duração das aulas que estão na tag <span>
var getAulas = document.getElementsByTagName('span');
//filtrar somante a duração nas tag <span> e colocar em um array
var timeAulas = [];
for(var i = 0; i < getAulas.length;i++){
    if(getAulas[i].innerHTML.length == 5){
        timeAulas.push(getAulas[i].innerHTML);
	}
}
var mensagem1 = 'O curso PHP do Zero ao Profissional tem '+timeAulas.length+' Aulas';
//função passa string 'min:seg' por parametro em numero e retorna em segundos
function timeToNumber(duracao){
    var aux = duracao.split(':');
    var min = parseInt(aux[0]);
    var seg = parseInt(aux[1]);
    var soma = (min * 60) + seg;
    return soma;
}
var somaSegundos = 0;
for(var i = 0; i < timeAulas.length; i++){
	somaSegundos += timeToNumber(timeAulas[i]);
}
//transforma segundos em horas 
var horasEmVideo = somaSegundos / 60 / 60;
horasEmVideo = parseInt(horasEmVideo);
//print
var mensagem2 = ' e tem aproximadamente '+horasEmVideo+' horas em video';
console.log(mensagem1, mensagem2);
