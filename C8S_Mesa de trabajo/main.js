const noticias = [
  {
    titulo:
      "Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
    imgUrl:
      "https://imagenes.elpais.com/resizer/Dt3jdJZcCEawLWB4j4DOHsQgIPg=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/KBNNSXLOUVF4TFUVN2LVMRBAMQ",
    descripcion:
      "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
    fecha: "07/06/21",
    tipoNacional: true,
  },
  {
    titulo: "El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
    imgUrl:
      "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
    descripcion:
      "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
    fecha: "02/06/21",
    tipoNacional: false,
  },
  {
    titulo: "Cómo evitar que se empañen los anteojos al usar barbijo",
    imgUrl:
      "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
    descripcion:
      "Para quienes utilizan anteojos, la combinación deluso obligatorio de tapabocas desde el año pasado se volvió unacomplicación. Paso a paso para evitar que se empañen",
    fecha: "01/06/21",
    tipoNacional: true,
  },
  {
    titulo:
      "La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
    imgUrl:
      "https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
    descripcion:
      "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
    fecha: "04/06/21",
    tipoNacional: false,
  },
  {
    titulo:
      "Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
    imgUrl:
      "https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
    descripcion:
      "La exposición, que cuenta con postales icónicas de“El Diez” que capturaron los fotógrafos de la agencia de noticias Télam,es uno de los hitos del festival Mes de la Fotografía de Belgrado",
    fecha: "07/06/21",
    tipoNacional: true,
  },
];

const main = document.querySelector('#news');
const btn = document.querySelectorAll('.btn');

const btnTodos = document.querySelector("#btn-todos");
const btnNacionales = document.querySelector("#btn-nacionales");
const btnInternacionales = document.querySelector("#btn-internacionales");

let nacionales = noticias.filter(categoria => categoria.tipoNacional == true);
let internacionales = noticias.filter(categoria => categoria.tipoNacional == false);


window.addEventListener("load", function () {
  renderizarNoticias(noticias);
  btnTodos.classList.add('active');
});


btnTodos.addEventListener("click", function () {
  renderizarNoticias(noticias);
  eliminarClaseActive();
  this.classList.add('active');
});


btnNacionales.addEventListener("click", function () {
  renderizarNoticias(nacionales);
  eliminarClaseActive();
  this.classList.add('active');
});

btnInternacionales.addEventListener("click", function () {
  renderizarNoticias(internacionales);
  eliminarClaseActive();
  this.classList.add('active');
});


function renderizarNoticias(arrayNoticias) {
  main.innerHTML = "";

  for (let noticia of arrayNoticias) {
    let template = `
      <div class="card">      
        <div class="card-content">
          <h2>${noticia.titulo}</h2>
          <p>${noticia.descripcion}</p>
          <span>${noticia.fecha} | <strong>${noticia.tipoNacional ? "Nacionales" : "Internacionales"}</strong></span>
        </div>  
        <img class="card-img"
            src="${noticia.imgUrl}"
            alt="imagen-noticia"
        />
      </div>
    `;
    main.innerHTML += template;
  }
}

function eliminarClaseActive() {
  btn.forEach(btn => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    }   
  });
}

