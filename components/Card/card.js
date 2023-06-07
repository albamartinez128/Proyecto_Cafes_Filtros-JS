import "./card.css";
import { carrito } from "../..";
import { cafes } from "../../data/cafes";

function agregar(id) {
  let seleccion = cafes.find((cafe) => cafe.id == id);
  carrito.push(seleccion);
  document.getElementById("number-shop").innerHTML = carrito.length;
  console.log(carrito.length);
}
export const card = (cafe) => {
  return `
  <article class= "card">
        <div class="card-img">
            <img src="${cafe.imagen}" alt="${cafe.name}"/ class="cafe-producto">
        </div>
        <div class="card-body">
            <h2>${cafe.name}</h2>
            <h5>${cafe.aroma}</h5>
            <p>${cafe.description}</p>
            <h4> ${cafe.intensidad}</h4>

            <h3>${cafe.price}€</h3>
            <button class="btn carrito_shop">Añadir</button>
        </div>
    </article>
    `;
};
