function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();

  background(151, 182, 206);

  //INTESTAZIONE CON NOME E CORSO
  textFont("Monserrat");

  textAlign(LEFT, TOP);
  noStroke();
  textSize(16);
  fill(45, 45, 70);
  text("Riboldi Simone", 30, 22);

  textAlign(RIGHT, TOP);
  textSize(16);
  fill(45, 45, 70);
  text("Laboratorio di Computer Grafica per l'Information Design", windowWidth - 30, 23);


  //TITOLO
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(60);
  fill(45, 45, 70);
  text("COME UN LINGUAGGIO", 30, 65);

  //SOTTOTITOLO
  textAlign(LEFT, TOP);
  textStyle(ITALIC);
  textSize(30);
  fill(45, 45, 70);
  text("Esercitazione 2", 30, 125);

  //linea
  stroke(45, 45, 70);
  strokeWeight(1);
  line(30, 183, windowWidth - 30, 183);
  noStroke();

  //GRIGLIA
  let numeroGlifi = 120;
  let numeroColonne = ceil(sqrt(numeroGlifi)) + 4;
  let numeroRighe = ceil(numeroGlifi/numeroColonne);

  let spazioSuperiore = 210;
  let altezzaDisponibile = windowHeight - spazioSuperiore;

  let dimColonna= windowWidth / numeroColonne;
  let dimRiga = altezzaDisponibile / numeroRighe;

  for (let g = 0; g < numeroGlifi; g++) {
    let colonna = g % numeroColonne;
    let riga = floor(g / numeroColonne);

    let x = colonna * dimColonna + dimColonna / 2;
    let y = riga * dimRiga + spazioSuperiore + dimRiga / 2;
    
    let dimensione = random(35, 70);

    mioGlifo (x, y, dimensione);
  }
}


//glifo
function mioGlifo(_x, _y, _size) {
  push()
  translate(_x, _y);
  
  let coloriPetali = [
    color(220, 75, 80),
    color(247, 177, 15),
    color(165, 115, 210),
    color(95, 155, 105),
    color(225, 125, 55),
    color(110, 155, 220),
    color(245, 225, 215)
  ];

  let colorePetalo = random(coloriPetali);
  let numeroPetali = floor(random(5, 11));
  let dimensionePetalo = _size * random(0.35, 0.48);
  let distanzaCentro = _size * 0.28;
  let rotazione = random(0, 360);

  rotate(rotazione);

  //petali

  for (let i = 0; i < numeroPetali; i++) {
    push();
    rotate(i*360/numeroPetali);
    translate(distanzaCentro, 0);
    fill(colorePetalo);
    stroke(45, 45, 70);
    strokeWeight(1);
    ellipse(0, 0, dimensionePetalo, dimensionePetalo* 0.80);
    pop();
  }

  //pallino al centro
  fill(255, 232, 160);
  stroke(45, 45, 70);
  strokeWeight(1);
  circle(0, 0, _size * 0.28);
  noStroke();

  pop();
}

//ridimensionamento
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}