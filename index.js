import { header } from "./components/Header/header";
import { hero } from "./components/Hero/hero";
import { main } from "./components/Main/main";
import { footer } from "./components/Footer/footer";
import { card } from "./components/Card/card";
import { cafes } from "./data/cafes";
import { contact } from "./components/Contact/contact";
import { about } from "./components/About/about";
import { team } from "./components/Team/team";
export let carrito = [];

// Importar "./main.css";
import "./index.css";

// Obtener el elemento del DOM con el id "app"
const app = document.querySelector("#app");

// Insertar el header en el DOM
app.insertAdjacentHTML("afterbegin", header());

app.insertAdjacentHTML("beforeend", hero());

// Insertar el main en el DOM
app.insertAdjacentHTML("beforeend", main());

//Insertar el main en el DOM
app.insertAdjacentHTML("afterend", footer());

//Insertar en el main en el DOM
app.insertAdjacentHTML("beforeend", contact());
//Insertar en el main en el DOM
app.insertAdjacentHTML("beforeend", about());

//Insertar el Team en el DOM
app.insertAdjacentHTML("beforeend", team());

function filtrarIntensidad() {
  // Obtener todos los radios

  const radiosIntensidad = document.querySelectorAll("input[name=intensidad]");
  const radiosAroma = document.querySelectorAll("input[name=aroma]");
  const filtroPrecio = document.getElementById("buscar");
  // Obtener el contenedor de los cafés
  const cafeContainer = document.querySelector("#shop");

  // Variable para guardar el valor del radio seleccionado
  let intensidad = "";
  let aroma = "";
  let precioValue = "";

  // Agregar un listener a cada radio
  radiosIntensidad.forEach((radio) => {
    radio.addEventListener("change", () => {
      intensidad = radio.value;

      // Limpiar el contenedor de los cafés
      cafeContainer.innerHTML = "";

      // Filtrar los cafés y agregarlos al contenedor
      cafes
        .filter((cafe) =>
          intensidad == "" ? true : cafe.intensidad === intensidad
        )
        .forEach((cafe) => {
          cafeContainer.innerHTML += card(cafe);
        });
      funcionMostrarCafes();
    });
  });
  // Agregar un listener a cada radio
  radiosAroma.forEach((radio) => {
    radio.addEventListener("change", () => {
      aroma = radio.value;

      // Limpiar el contenedor de los cafés
      cafeContainer.innerHTML = "";

      // Filtrar los cafés y agregarlos al contenedor
      cafes
        .filter((cafe) => (aroma == "" ? true : cafe.aroma === aroma))
        .forEach((cafe) => {
          cafeContainer.innerHTML += card(cafe);
        });
      funcionMostrarCafes();
    });
  });

  filtroPrecio.addEventListener("click", () => {
    precioValue = document.querySelector("#precio_number").value;
    console.log(precioValue);
    // Limpiar el contenedor de los cafés
    cafeContainer.innerHTML = "";

    // Filtrar los cafés y agregarlos al contenedor
    cafes
      .filter((cafe) =>
        precioValue == "" ? true : cafe.price <= parseFloat(precioValue)
      )
      .forEach((cafe) => {
        cafeContainer.innerHTML += card(cafe);
      });

    funcionMostrarCafes();
  });
}

//FILTRO Intensidad
const intensidad = document.querySelector("#intensidad");
intensidad.addEventListener("change", () => {
  const contenedor_intensidad = document.querySelector(".intensidad_selector");
  const contenedor_aroma = document.querySelector(".aroma_selector");
  const contenedor_precio = document.querySelector(".precio_selector");

  if (intensidad.checked) {
    contenedor_intensidad.style.display = "block";
    contenedor_aroma.style.display = "none";
    contenedor_precio.style.display = "none";
  } else contenedor_intensidad.style.display = "none";
});

filtrarIntensidad();
//FILTRO Precio
const precio = document.querySelector("#precio");
precio.addEventListener("change", () => {
  const contenedor_intensidad = document.querySelector(".intensidad_selector");
  const contenedor_aroma = document.querySelector(".aroma_selector");
  const contenedor_precio = document.querySelector(".precio_selector");
  if (precio.checked) {
    contenedor_precio.style.display = "block";
    contenedor_aroma.style.display = "none";
    contenedor_intensidad.style.display = "none";
  } else contenedor_precio.style.display = "none";
});

//FILTRO Aroma
const aroma = document.querySelector("#aroma");
aroma.addEventListener("change", () => {
  const contenedor_aroma = document.querySelector(".aroma_selector");
  const contenedor_intensidad = document.querySelector(".intensidad_selector");
  const contenedor_precio = document.querySelector(".precio_selector");

  if (aroma.checked) {
    contenedor_aroma.style.display = "block";
    contenedor_intensidad.style.display = "none";
    contenedor_precio.style.display = "none";
  } else {
    contenedor_aroma.style.display = "none";
  }
});

//LIMPIAR FILTROS
function limpiarFiltros() {
  const cafeContainer = document.querySelector("#shop");
  const aroma = document.querySelector("#aroma");
  const intensidad = document.querySelector("#intensidad");
  const precio = document.querySelector("#precio");
  aroma.value = "";
  intensidad.value = "";
  precio.value = "";
  const todosloscafes = cafes.map((cafe) => `${card(cafe)}`).join("");
  cafeContainer.innerHTML = todosloscafes;
  document.querySelector(".intensidad_selector").style.display = "none";
  document.querySelector(".aroma_selector").style.display = "none";
  document.querySelector(".precio_selector").style.display = "none";
  const filtrointensidad = document.querySelector("#intensidad");
  const filtroaroma = document.querySelector("#aroma");
  const filtroprecio = document.getElementById("precio");
  filtrointensidad.checked = false;
  filtroaroma.checked = false;
  filtroprecio.checked = false;
}

const botonlimpiar = document.querySelector("#limpiar");
botonlimpiar.addEventListener("click", limpiarFiltros);

// AÑADIR CARRITO DE COMPRA

function funcionMostrarCafes() {
  const carrito_shop = document.querySelectorAll(".carrito_shop");
  carrito_shop.forEach((element) => {
    element.addEventListener("click", () => {
      const numeroCarrito = document.getElementById("number-shop");
      numeroCarrito.innerText = parseInt(numeroCarrito.innerText) + 1;
    });
  });
}
funcionMostrarCafes();
