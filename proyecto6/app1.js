const audioCorrecta = document.getElementById("audioCorrecta");
const audioIncorrecta = document.getElementById("audioIncorrecta");
document.addEventListener("DOMContentLoaded", () => {
  //reproduciendo audio
  var audioPrincipal = "./public/Audio/intro.mp3";

  //imágenes
  var imagen1 = "./public/imagenes/parejas-001.png";
  var imagen2 = "./public/imagenes/parejas-002.png";
  var imagen3 = "./public/imagenes/parejas-003.png";
  var imagen4 = "./public/imagenes/parejas-004.png";
  var imagen5 = "./public/imagenes/parejas-005.png";
  var imagen6 = "./public/imagenes/parejas-006.png";
  var imagen7 = "./public/imagenes/parejas-007.png";
  var imagen8 = "./public/imagenes/parejas-008.png";

  //creando array con las imágenes
  const imagenes = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
  ];

  //duplicando imágenes
  const duplas = imagenes.concat(imagenes);

  // Función para mezclar el array de imágenes
  const mezclarImagenes = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // Mientras aún queden elementos para mezclar
    while (0 !== currentIndex) {
      // Seleccionar un elemento aleatorio
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Intercambiar con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const duplasMezcladas = mezclarImagenes(duplas);

  var listaDeTarjetas = document.getElementById("memorama");

  for (var i = 0; i < duplasMezcladas.length; i++) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    var imagen = document.createElement("img");
    imagen.src = duplasMezcladas[i];
    var imagenTapada = document.createElement("img");
    imagenTapada.src = "./public/imagenes/tarjeta_cubierta.png";
    imagenTapada.dataset.imagen = duplasMezcladas[i];
    tarjeta.appendChild(imagenTapada);
    listaDeTarjetas.appendChild(tarjeta);
    tarjeta.classList.add("tapada");
  }
}); //fin del dom loader

//fin script

var destaparTarjeta = (tarjeta) => {
  var imagenTapada = tarjeta.querySelector("img");
  imagenTapada.src = imagenTapada.dataset.imagen;
  tarjeta.classList.add("destapada");
  //   console.log(imagenTapada.src);
};

const taparTarjeta = (tarjeta) => {
  var imagenTapada = tarjeta.querySelector("img");
  imagenTapada.src = "./public/imagenes/tarjeta_cubierta.png";
  tarjeta.classList.remove("destapada");
};

const jugar = () => {
  var duplasEncontradas = 0;
  var tarjetasDestapadas = 0;
  var tarjetaUno;
  var tarjetaDos;
  var imagenUno = "";
  var imagenDos = "";

  var tarjetas = document.querySelectorAll(".tarjeta");
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", function () {
      if (tarjetasDestapadas < 2) {
        if (!this.classList.contains("destapada")) {
          destaparTarjeta(this);
          if (tarjetasDestapadas === 0) {
            tarjetaUno = this;
            imagenUno = this.querySelector("img").src;
            console.log(imagenUno);
            tarjetasDestapadas += 1;
          } else if (tarjetasDestapadas === 1) {
            tarjetaDos = this;
            imagenDos = this.querySelector("img").src;
            console.log(imagenDos);
            tarjetasDestapadas += 1;
            if (imagenUno === imagenDos) {
              audioCorrecta.play();
              duplasEncontradas += 1;
              imagenUno = "";
              imagenDos = "";
              tarjetasDestapadas = 0;
              console.log("encontraste par papá");
            } else {
              setTimeout(() => {
                taparTarjeta(tarjetaUno);
                taparTarjeta(tarjetaDos);
                tarjetasDestapadas = 0;
              }, 1000);
              audioIncorrecta.play();
            }
          }
        }
      }
    });
  });
};

//función para cerrar  el modal
const cerrarModal = () => {
  const modal = document.getElementById("modal");
  modal.remove();
  const audioIntro = document.getElementById("audioIntro");
  audioIntro.play();
  jugar();
};
