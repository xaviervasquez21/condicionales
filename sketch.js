let input; // Declara una variable llamada input, pero no se le asigna ningún valor inicialmente
let resultado = "";  // Declara una variable llamada resultado y le asigna una cadena de texto vacía ("")


function setup(){
    createCanvas(400, 200);
    frameRate(60); // FPS de la página



        // Crear una caja de entrada para el número
    input = createInput(); // Crear textBox
    input.position(20, 60); // Ubicación del textBox


        // Crear un botón para verificar si es par o impar
    let boton = createButton('Check');
    boton.position(input.x + input.width + 10, 60);
    boton.mousePressed(verificarNumero);  // Asigna la función al click

    textAlign(CENTER);
    textSize(15);
    fill(255); // Color de texto Blanco
}


function draw() {
    background(230, 0, 126); // Color magenta
        // Mostrar el mensaje de bienvenida
    text("Ingrese un número para verificar si es Par o Impar", width / 2, 30); // Width es ancho
  
        // Mostrar el resultado
    text(resultado, width / 2, 120);
}


function verificarNumero() {
    resultado = "";  // Limpiar el resultado antes de verificar
    let numero = input.value();  // Obtener el valor del input
    
    // Verificar si el valor ingresado no es un número válido
    if (isNaN(numero) || numero.trim() === "" || !Number.isInteger(parseFloat(numero))) {
      resultado = "No es un número válido.";
    } else {
      numero = int(numero);  // Convertir a número entero
      
      // Verificar si el número es par o impar
      if (numero % 2 === 0) {
        resultado = "El número " + numero + " es PAR.";
      } else {
        resultado = "El número " + numero + " es IMPAR.";
      }
    }
  }