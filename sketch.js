//Passo a passo
//Na aula 04 será programada arepetição do movimento dos carrinhos.

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicial();
  verificaColisão();
  incluiPontos();
  marcaPontos();
  
  
  
}
