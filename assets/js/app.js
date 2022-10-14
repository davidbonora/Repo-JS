function ejercicio3_2() {
  let quad = ["****", "****", "****", "****"];
  console.log(`${quad[0]} \n${quad[1]}\n${quad[2]} \n${quad[3]}`);
}

// ejercicio3_2();

function ejercicio6_3() {
  let quotes = [
    "Al primer amor se le quiere más, al resto se le quiere mejor.",
    " Caminando en línea recta no puede uno llegar muy lejos.",
    "El principito, que me hacía muchas preguntas, jamás parecía oír las mías.",
    "Eres el dueño de tu vida y tus emociones, nunca lo olvides. Para bien y para mal.",
    "Es muy triste olvidar a un amigo. No todos han tenido un amigo.",
    "Lo que veo aquí es sólo una corteza. Lo más importante es invisible.",
    "Los hombres se meten en los rápidos, pero no saben dónde van ni lo que quieren. Entonces se agitan y dan vueltas.",
    "Me pregunto si las estrellas se iluminan con el fin de que algún día, cada uno pueda encontrar la suya.",
    "Se debe pedir a cada cual, lo que está a su alcance realizar.",
    "Todas las personas mayores fueron al principio niños. (Aunque pocas de ellas lo recuerdan)",
    " Fue el tiempo que pasaste con tu rosa lo que la hizo tan importante.",
    "Es verdaderamente útil porque es linda.",
    "No era más que un zorro semejante a cien mil otros. Pero yo le hice mi amigo y ahora es único en el mundo.",
    "Sólo se conocen bien las cosas que se domestican.",
    "Y cuando te hayas consolado (uno siempre termina por consolarse) te alegrarás de haberme conocido.",
    "Te miraré de reojo y tú no dirás nada. La palabra es fuente de malentendidos.",
    "Yo puedo juzgarme a mí mismo en cualquier parte y no tengo necesidad de vivir aquí.",
    "Para los vanidosos todos los demás hombres son admiradores.",
    "Bebo para olvidar que soy un borracho.",
    "¿Y de qué te sirve poseer las estrellas?",
  ];
  console.log(quotes.length);
let counter = 10;
let timer = setInterval(() => {
  console.log(counter);
  counter--;
  if (counter == 0) {
    clearInterval(timer);
  }
}, 1000);}


ejercicio6_3();

function ejercicio7_3() {
  let min = 0;
  let max = 500;
  let setNumber = [];
  let number = Math.floor(Math.random() * (max - min)) + min;
  for (let i = 0; i < 100; i++) {
    setNumber.push(Math.floor(Math.random() * (max - min)) + min);
  }

  console.log(setNumber);

  let pares = setNumber.filter((x) => x % 2 == 0);

  let counter = 0;
  pares.sort(function (value1, value2) {
    counter++;
    return value2 - value1;
  });
  console.log(`Los números pares son: ${pares}`);
}

// ejercicio7_3();
