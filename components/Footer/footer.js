import "./footer.css";

export const footer = () => {
  return `
    <footer>
    <div class="sombra">
    </div>
    <div class="custom-shape-divider-top-1684840376">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

      <div class ="titulo-texto">
        <h1>Cafe</h1>
      </div>
      <nav class="menu-footer">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      <div class="redes-sociales">
        <ul>
          <li>
          <a href="#"
            ><img src="img/facebook.png" alt="Facebook logo"
          /></a>
          </li>
          <li>
          <a href="#"
            ><img src="img/twitter.png" alt="Twitter logo"
          /></a>
          </li>
          <li>
          <a href="#"
            ><img src="img/tik-tok.png" alt="TikTok Logo"
          /></a>
          </li>
        </ul>
      </div>
    </footer>
  `;
};
