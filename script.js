const button = document.getElementById('crecimientoBtn');
const button2 = document.getElementById('noacepta');
const texto = document.getElementById('textoCambio');
const texto2 = document.getElementById('texto2');
const imagen1 = document.getElementById('imgprimero');
const imagen2 = document.getElementById('imgsegundo');
const imagen3 = document.getElementById('imgtres');
const imagen4 = document.getElementById('imgcuatro');
const imagen5 = document.getElementById('imgcinco')
const imagen6 = document.getElementById('imgfinal')

 let growthFactor = 1.1;



function noacepto(){
  const computedStyle = window.getComputedStyle(button);
  const currentWidth = parseFloat(computedStyle.width);
  const currentHeight = parseFloat(computedStyle.height);

  const newWidth = currentWidth * growthFactor;
  const newHeight = currentHeight * growthFactor;

  button.style.width = newWidth + 'px';
  button.style.height = newHeight + 'px';

  // Array de textos diferentes
  const textos = ["¡Oh no! :'(", "¡Segura..!", " Piensalo ¿He?", " :("];
 
  // Array de imágenes diferentes
  //const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg"];

  // Obtener un índice aleatorio para seleccionar un texto e imagen diferente cada vez
  const randomIndex = Math.floor(Math.random() * textos.length);
  
  // Cambiar el texto del párrafo
  texto.textContent = textos[randomIndex];
  console.log(textos[randomIndex]);
  // Cambiar la imagen
 // imagen.src = imagenes[randomIndex]; 

 if(textos[randomIndex] == '¡Texto Cambiado 1!' )
 {
  
  imagen1.classList.remove('imgprimero');
  imagen1.classList.add('imagen-oculta');
  imagen2.classList.remove('dos');
  imagen2.classList.add('imgprimero');
  imagen3.classList.add('dos');
  imagen4.classList.add('dos');
  imagen6.classList.add('dos');
  imagen5.classList.add('dos');
 }else if(textos[randomIndex] == '¡Segura..!' )
 {
  imagen1.classList.remove('imgprimero'); 
  imagen1.classList.add('imagen-oculta');
  imagen2.classList.add('dos');
  imagen5.classList.add('dos');
  imagen4.classList.add('dos');
  imagen6.classList.add('dos');
  imagen3.classList.remove('dos');
  imagen3.classList.add('imgprimero');
  

 }else if(textos[randomIndex] == 'Piensalo ¿He?' ){
  imagen1.classList.remove('imgprimero'); 
  imagen1.classList.add('imagen-oculta');
  imagen2.classList.add('dos');
  imagen3.classList.add('dos');
  imagen5.classList.add('dos');
  imagen6.classList.add('dos');
  imagen4.classList.remove('dos');
  imagen4.classList.add('imgprimero');
 }else{
  imagen1.classList.remove('imgprimero'); 
  imagen1.classList.add('imagen-oculta');
  imagen2.classList.add('dos');
  imagen3.classList.add('dos');
  imagen4.classList.add('dos');
  imagen6.classList.add('dos');
  imagen5.classList.remove('dos');
  imagen5.classList.add('imgprimero');

 }
 
}


function acepta(){
 
 
  imagen1.classList.remove('imgprimero'); 
  imagen1.classList.add('imagen-oculta');
  imagen2.classList.add('dos');
  imagen3.classList.add('dos');
  imagen4.classList.add('dos');
  imagen5.classList.add('dos');
  imagen6.classList.remove('dos');
  imagen6.classList.add('imgprimero');
  button.classList.add('dos');
  button2.classList.add('dos');

  texto.textContent = "¡Oh Siii!  jajajaja  ";
  texto2.textContent = "   ";

}


