const imagenes = document.querySelectorAll("img");

const urlImagenes = [];

imagenes.forEach((_unused, index) => {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
  urlImagenes.push(url);
});

urlImagenes.forEach((url, index) => {
  const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
  nodoImagen.setAttribute("src", url);

  const link = document.querySelector(`.rutas-img-${index+1}`);
  link.setAttribute("href", url);
  link.setAttribute("target", "_blank");
  
});


// mejora, usar template literals para armar el <a>