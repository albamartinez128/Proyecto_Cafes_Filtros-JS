import "./main.css";
import { card } from "../Card/card.js";

import { cafes } from "../../data/cafes.js";

export const main = () => {
  return `
    <main>
      <div class="filtro">
      <div class="encabezado_filtro">
      <h4>FILTROS </h4>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
      
      <div class="filtros_selector">
        <span>
        <input type="radio" name="filtros_selector" id="precio">
        <label for="precio">PRECIO</label>
        </span>
        <span>
        <input type="radio" name="filtros_selector" id="aroma">
        <label for="aroma">AROMA</label>
        </span>
        <span>
        <input type="radio" name="filtros_selector" id="intensidad">
        <label for="intensidad">INTENSIDAD</label>
        </span>
        <span class="limpiarFiltros">
        <button id="limpiar">LIMPIAR FILTROS</button>
        </span>
      </div>
      </div>
      <div class="precio_selector">
      <input id="precio_number" style="display:inline-block" placeholder="3€" name="precio" type="number"> <button id="buscar">Buscar</button>
      </div>
      <div class="aroma_selector">
        <input name="aroma" type="radio" value="Avellana" id="Avellana" class="selectores">
        <label for="Avellana">Avellana</label>
        <input name="aroma" type="radio" value="Galleta" id="Galleta" class="selectores">
        <label for="Galleta">Galleta</label>
        <input name="aroma" type="radio" value="Dulce" id="Dulce" class="selectores">
        <label for="Dulce">Dulce</label>
        <input name="aroma" type="radio" value="Floral" id="Floral" class="selectores">
        <label for="Floral">Floral</label>
        <input name="aroma" type="radio" value="" id="Todos_aroma" class="selectores">
        <label for="Todos_aroma">Todos</label>
      </div>
      <div class="intensidad_selector">
        <input name="intensidad" type="radio" value="Fuerte" id="Fuerte" class="selectores">
        <label for="Fuerte">Fuerte</label>
        <input name="intensidad" type="radio" value="Media" id="Media" class="selectores">
        <label for="Media">Media</label>
        <input name="intensidad" type="radio" value="Suave" id="Suave" class="selectores">
        <label for="Suave">Suave</label>
        <input name="intensidad" type="radio" value="" id="Todos_intensidad" class="selectores">
        <label for="Todos_intensidad">Todos</label>
      </div>
    
      </div>
        <div class="cafe__container" id="shop">
          ${cafes.map((cafe) => `${card(cafe)}`).join("")}
        </div>
    </main>
`;
};
